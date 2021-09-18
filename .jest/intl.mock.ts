beforeAll(() => {
  jest
    .spyOn(Intl, 'NumberFormat')
    .mockImplementation(
      () => ({ format: (value: number) => value.toString() } as never)
    )
})

afterAll(() => {
  jest.resetAllMocks()
})
