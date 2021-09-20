import { build, fake } from '@jackfranklin/test-data-bot'

export type User = {
  username: string
  name: string
  email: string
  address: string
  postalcode: string
  country: string
  phone: string
  cardnumber: string
  cardholder: string
  expirydate: string
  code: string
}

export const createUser = build<User>('User', {
  fields: {
    username: fake(f => f.internet.userName()),
    name: fake(f => f.name.findName()),
    address: fake(f => f.address.streetAddress()),
    postalcode: fake(f => f.address.zipCode()),
    country: fake(f => f.address.country()),
    phone: fake(f => f.phone.phoneNumber()),
    cardnumber: '1234 9876 0987 2345',
    cardholder: fake(f => f.internet.userName()),
    expirydate: '12/30',
    code: '987',
    email: ''
  },
  postBuild: user => ({
    ...user,
    email: `${user.username.toLowerCase()}@barkyn.com`,
  })
})
