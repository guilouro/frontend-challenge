import Image from 'next/image'
import { useRouter } from 'next/router'
import { Form, withSubmit } from 'formcat'
import InputField from 'components/InputField'
import Layout from 'components/Layout'
import OrderItem from 'components/OrderItem'
import Button, { ButtonProps } from 'components/Button'
import CartAmount from 'components/CartAmount'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'
import { setStorageItem } from 'utils/storage'

const Checkout = () => {
  const router = useRouter()
  const { total, items } = useCart()

  const Submit = withSubmit((props: ButtonProps) => <Button {...props} />)

  const handleSubmit = async ({ data }: { [key: string]: string }) => {
    // use a POST to send an order in correct way
    setStorageItem('DATA', data as never)
    router.push('/success')
  }

  return (
    <Layout>
      <S.Wrapper>
        <Form onSubmit={handleSubmit} keyUpValidation>
          <S.Content>
            <S.Image>
              <Image src="/img/bg.png" width={188} height={489} />
            </S.Image>
            <S.SectionForm>
              <S.Title>Your information</S.Title>
              <InputField label="Your Name" name="name" required />
              <InputField label="Email" name="email" required />

              <S.Title>Shipping information</S.Title>
              <InputField label="Shipping address" name="address" required />
              <InputField label="Postal Code" name="postalcode" required />
              <InputField label="Country" name="country" required />
              <InputField label="Phone Number" name="phone" required />

              <S.Title>Payment information</S.Title>
              <InputField label="Card number" name="cardnumber" required />
              <InputField label="Card Holder" name="cardholder" required />
              <InputField label="Expiry date" name="expirydate" required />
              <InputField label="Security code" name="code" required />
            </S.SectionForm>

            <section>
              <S.OrderBox>
                <S.Title>Your Cart</S.Title>
                {items.map((item) => (
                  <S.OrderItem key={item.title}>
                    <OrderItem
                      {...item}
                      title={`${item.quantity || 1}x ${item.title}`}
                    />
                  </S.OrderItem>
                ))}
                <CartAmount subtotal={total} shipping={11} />
                <Submit>Complete Order</Submit>
              </S.OrderBox>
            </section>
          </S.Content>
        </Form>
      </S.Wrapper>
    </Layout>
  )
}

export default Checkout
