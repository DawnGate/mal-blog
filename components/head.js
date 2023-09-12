import NextHead from 'next/head'

const Head = () => {
  const meta = {
    title: 'Lam Nguyen Blogs',
    description: 'Introduce and sharing blogs of Lam Nguyen(kraken)',
    image: `${process.env.NEXT_PUBLIC_HOST_URL}/assets/favicons/logo-kraken.svg`,
    imageOg: `${process.env.NEXT_PUBLIC_HOST_URL}/assets/images/logo-kraken.jpeg`,
    author: 'lam99quyen@gmail.com',
    url: process.env.NEXT_PUBLIC_HOST_URL,
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
      <meta property="og:url" content={meta.url} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.imageOg} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@lam99quyen" />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.imageOg} />
      <meta property="twitter:image:src" content={meta.imageOg} />
      <meta property="twitter:image:type" content="image/jpeg" />
      <meta property="twitter:image:width" content="200" />
      <meta property="twitter:image:height" content="200" />

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
