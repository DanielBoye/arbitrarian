import "@rainbow-me/rainbowkit/styles.css";
import "../styles/normalize.css";
import "../styles/globals.css";


// add favicon over component 
export default function App({ Component, pageProps }) {
  return (
    <>   
        <Component {...pageProps} />
    </>
  );
}
