import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {" "}
      {/* Add whichever language you want here */}
      <Head>
        <meta
          name={"description"}
          content={
            "Materials Resources has everything you need for your business. Shop our catalog!"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
