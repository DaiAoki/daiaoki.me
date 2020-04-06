import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="DaiAokiのポートフォリオです。BullzでCTOをしています。システムに関することなら何でも好きですが、最近は設計にハマってます。" />
          <link rel="canonical" href="https://daiaoki.me" />
          <meta property="og:image" content="/assets/images/profile.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="DaiAoki's Portfolio" />
          <meta property="og:locale" content="website" />
          <meta property="og:title" content="DaiAoki's Portfolio" />
          <meta property="og:description" content="DaiAokiのポートフォリオです。BullzでCTOをしています。システムに関することなら何でも好きですが、最近は設計にハマってます。" />
          <meta property="og:url" content="https://daiaoki.me" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DaiAoki30" />
          <meta name="twitter:creator" content="@DaiAoki30" />
          <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon.png" />
          <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon-precomposed.png" />
          <link rel="apple-touch-icon" sizes="57x57"   href="/assets/images/favicons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60"   href="/assets/images/favicons/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72"   href="/assets/images/favicons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76"   href="/assets/images/favicons/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/favicons/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/favicons/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/favicons/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/favicons/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon-180x180.png" />
          <link rel="icon" sizes="36x36"   href="/assets/images/favicons/android-chrome-36x36.png" />
          <link rel="icon" sizes="48x48"   href="/assets/images/favicons/android-chrome-48x48.png" />
          <link rel="icon" sizes="72x72"   href="/assets/images/favicons/android-chrome-72x72.png" />
          <link rel="icon" sizes="96x96"   href="/assets/images/favicons/android-chrome-96x96.png" />
          <link rel="icon" sizes="144x144" href="/assets/images/favicons/android-chrome-128x128.png" />
          <link rel="icon" sizes="144x144" href="/assets/images/favicons/android-chrome-144x144.png" />
          <link rel="icon" sizes="144x144" href="/assets/images/favicons/android-chrome-152x152.png" />
          <link rel="icon" sizes="192x192" href="/assets/images/favicons/android-chrome-192x192.png" />
          <link rel="icon" sizes="192x192" href="/assets/images/favicons/android-chrome-256x256.png" />
          <link rel="icon" sizes="192x192" href="/assets/images/favicons/android-chrome-384x384.png" />
          <link rel="icon" sizes="192x192" href="/assets/images/favicons/android-chrome-512x512.png" />
          <link rel="manifest" href="/assets/images/favicons/manifest.json"/>
          <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"/>
        </Head>
        <body style={{overflow: 'hidden'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
