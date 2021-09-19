import { CartObject } from 'hooks/use-cart'

const APP_KEY = 'BARKYN_CART'

export function getStorageItem() {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(APP_KEY)
  return JSON.parse(data || '[]')
}

export function setStorageItem(value: CartObject) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(APP_KEY, data)
}
