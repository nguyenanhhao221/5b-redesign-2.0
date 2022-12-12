import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { Inter } from "@next/font/google";
import "../styles/globals.css";
import { MessengerFacebook } from "../components/Facebook/MessengerFacebook";

//Font
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className={inter.className}>
        <MessengerFacebook />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
