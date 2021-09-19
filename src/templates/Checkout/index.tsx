import Image from 'next/image'
import { Form, withSubmit } from 'formcat'
import InputField from 'components/InputField'
import Layout from 'components/Layout'
import OrderItem from 'components/OrderItem'

import * as S from './styles'
import Button, { ButtonProps } from 'components/Button'
import CartAmount from 'components/CartAmount'

const orders = [
  {
    title: '2x Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 4.58
  },
  {
    title: '1x Barkyn Cannabis Oil para cães',
    image: '/img/products/cannabis.png',
    price: 2.29
  }
]

const Checkout = () => {
  const Submit = withSubmit((props: ButtonProps) => <Button {...props} />)

  return (
    <Layout>
      <S.Wrapper>
        <Form onSubmit={console.log}>
          <S.Content>
            <S.Image>
              <Image src="/img/bg.png" width={188} height={489} />
            </S.Image>
            <S.SectionForm>
              <S.Title>Your information</S.Title>
              <InputField label="Your Name" name="name" required />
              <InputField label="Email" name="email" required />

              <S.Title>Shipping information</S.Title>
              <InputField label="Shipping address" name="address" />
              <InputField label="Postal Code" name="postalcode" />
              <InputField label="Country" name="country" />
              <InputField label="Phone Number" name="phone" />

              <S.Title>Payment information</S.Title>
              <InputField label="Card number" name="cardnumber" />
              <InputField label="Card Holder" name="cardholder" />
              <InputField label="Expiry date" name="expirydate" />
              <InputField label="Security code" name="code" />
            </S.SectionForm>

            <section>
              <S.OrderBox>
                <S.Title>Your Cart</S.Title>
                {orders.map((item) => (
                  <S.OrderItem key={item.title}>
                    <OrderItem {...item} />
                  </S.OrderItem>
                ))}
                <CartAmount subtotal={9} shipping={2} />
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
