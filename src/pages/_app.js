import '@/styles/globals.css'
import '../../node_modules/mdb-ui-kit/css/mdb.min.css'
import { wrapper } from '@/redux/store'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
