import React from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components/Layout";
import { Navbar } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar/>
        <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
