import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import "../styles/globals.css"
function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
