import { useEffect } from "react";
import { useRouter } from "next/router";
import { UserWrapper } from "../context/state";
import Script from "next/script";
import Head from "next/head";
import { pageview } from "../lib/gtm";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Script src="https://love.evenjust.com/larapush_script_cb39b.js"></Script>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-242082267-2`}
      />

      <Script strategy="lazyOnload" id="google analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-242082267-2', {
          page_path: window.location.pathname,
        });
        `}
      </Script>

      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6010823966003879"
        crossOrigin="anonymous"
      ></Script>
      {/* <Script>
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-6010823966003879",
        enable_page_level_ads: true,
      });
    </Script> */}

      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6010823966003879"
        crossOrigin="anonymous"
      ></Script>
      <UserWrapper>
        <Component {...pageProps} />
      </UserWrapper>
    </>
  );
}

export default MyApp;
