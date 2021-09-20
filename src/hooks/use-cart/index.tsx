import { useCallback, useMemo } from 'react'
import { ProductItemProps } from 'components/ProductItem'
import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from 'utils/storage'

const STORAGE_KEY = 'CART'

export type CartItem = {
  quantity?: number
} & Pick<
  ProductItemProps,
  'id' | 'price' | 'promotionalPrice' | 'title' | 'image' | 'packageInfo'
>

export type CartObject = {
  [key: string]: CartItem
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: number
  sliderIsOpen?: boolean
  openSlider: () => void
  closeSlider: () => void
  addToCart: (cartItem: CartItem) => void
  removeFromCart: (id: string) => void
  setItemQuantity: (id: string, num: number) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: 0,
  addToCart: () => null,
  removeFromCart: () => null,
  setItemQuantity: () => null,
  openSlider: () => null,
  closeSlider: () => null,
  clearCart: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartObject>({})
  const [sliderIsOpen, setsliderIsOpen] = useState(false)

  useEffect(() => {
    const data = getStorageItem(STORAGE_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  console.log(cartItems)

  const total = useMemo(
    () =>
      Object.values(cartItems)?.reduce((acc, item) => {
        return (
          acc + (item.promotionalPrice || item.price) * (item.quantity || 1)
        )
      }, 0),
    [cartItems]
  )

  const addToCart = useCallback(
    (item: CartItem) => {
      if (!cartItems[item.id]) {
        saveCart({ ...cartItems, [item.id]: item })
      }
    },
    [cartItems]
  )

  const saveCart = (items: CartObject) => {
    setCartItems(items)
    setStorageItem(STORAGE_KEY, items)
  }

  const removeFromCart = (id: string) => {
    delete cartItems[id]
    saveCart({ ...{}, ...cartItems })
  }

  const setItemQuantity = (id: string, num: number) => {
    saveCart({ ...cartItems, [id]: { ...cartItems[id], quantity: num } })
  }

  const clearCart = () => {
    saveCart({})
  }

  return (
    <CartContext.Provider
      value={{
        items: Object.values(cartItems),
        quantity: Object.values(cartItems).length,
        total: total,
        sliderIsOpen,
        openSlider: () => setsliderIsOpen(true),
        closeSlider: () => setsliderIsOpen(false),
        setItemQuantity,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
