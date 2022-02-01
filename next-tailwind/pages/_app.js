import '../styles/globals.css'
// import Layout from './components/Layout'

// function MyApp({ Component, pageProps }) {
//   return <Layout><Component {...pageProps} /></Layout>
// }

// export default MyApp

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}