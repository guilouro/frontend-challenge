import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index({ items }: HomeTemplateProps) {
  return <Home items={items} />
}

export async function getServerSideProps() {
  const response = await (await fetch('https://api.barkyn/products')).json()

  return {
    props: {
      items: response.results
    }
  }
}
