import NextHead from 'next/head'

const Head = () => {
  const meta = {
    title: 'Lam Nguyen Blogs',
    description: 'Introduce and sharing blogs of Lam Nguyen(kraken)',
    image: `${process.env.NEXT_PUBLIC_HOST_URL}/assets/favicons/logo-kraken.svg`,
    author: 'lam99quyen@gmail.com',
  }
  return (
    <NextHead>
      {/* <meta content="IE-edge" httpEquiv="X-UA-Compatible" /> */}
      <meta name="robots" content="follow, index" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.title} />
      <meta name="author" content={meta.author} />
      <title>{meta.title}</title>

      <meta property="og:site-name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lam99quyen" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <link rel="icon" type="image/svg+xml" href={meta.image} />

      {/* using for code hight light */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
      />
    </NextHead>
  )
}

export default Head
