import Head from "next/head";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/normalize.css";
import "../styles/globals.css";
import Providers from "./providers";


export default function App({ children}) {
  return (
    <>
      <Head>
        <title>Arbitrarian</title>
        <link href="/favicon.svg" rel="icon" type="image/svg" />
        <Providers {...children} />
      </Head>      
    </>
  );
}
