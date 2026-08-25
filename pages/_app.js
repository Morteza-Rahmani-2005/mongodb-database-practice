import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MangoDB Database Practice</title>
        <meta
          name="description"
          content="Practice project with MongoDB database"
        />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
