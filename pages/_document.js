import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-6 bg-zinc-800 text-white container mx-auto">
        <h1 className="text-2xl font-semibold">Memoization</h1>
        <hr className="my-5" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
