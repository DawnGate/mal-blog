import NextHead from 'next/head'

const Head = () => {
  return (
    <NextHead>
      {/* <meta content="IE-edge" httpEquiv="X-UA-Compatible" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Lam Nguyen homepage" />
      <meta name="author" content="LamNguyen" />
      <title>Lam Nguyen - Home Page</title>
      <meta property="og:title" content="Lam Nguyen - Home Page" key="title" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/assets/favicons/logo-kraken.svg"
      />
    </NextHead>
  )
}

export default Head
