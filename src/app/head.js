import Script from "next/script";

const RootHead = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RDZGP7KDC1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RDZGP7KDC1');
        `}
      </Script>
      <meta name="language" content="en" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="David Santiago Avellaneda Montero" />
      <meta name="copyright" content="David Santiago Avellaneda Montero" />
      <link rel="icon" href="/favicon.png" />
    </>
  );
};

export default RootHead;
