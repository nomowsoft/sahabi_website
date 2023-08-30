import "../styles/globals.css";
import "../styles/about_us_css.css";
import Layout from "../layouts/layout";

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  ) 
}
