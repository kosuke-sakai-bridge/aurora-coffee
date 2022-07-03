import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="ja">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document