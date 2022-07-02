import Layout from '../components/layout'
import 'ress'
import '../styles/globals.scss'

// 各ページにLayoutを設定しても問題ないが、_app.jsを利用することでコンポーネントの状態を維持することが可能
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
