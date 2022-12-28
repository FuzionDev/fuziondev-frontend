import React, { useEffect } from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import TrackingScript from "../../lib/TrackingScript";

const Layout = ({ children }) => {
  return (
    <>
      <TrackingScript />
      <Head>
        <title>FuzionDev - Software Developers</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="FuzionDev - Software Developers" />
        <meta
          name="og:title"
          property="og:title"
          content="FuzionDev - Software Developers"
        ></meta>
        <meta
          name="twitter:card"
          content="FuzionDev - Software Developers"
        ></meta>
        <link
          rel="canonical"
          href="https://FuzionDev-react.envytheme.com/"
        ></link>
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
