import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Barkyn: ração e veterinário para cães</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#5F2EFF" />
        <meta
          name="description"
          content="Criamos e entregamos à sua porta uma ração à medida do seu cão com base na idade, tamanho, estilo de vida e alergias, com o sabor que ele mais gosta. Acompanhamento veterinário online."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
