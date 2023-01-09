import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Memoization</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h2 className="text-xl font-semibold">Index</h2>
      <hr className="my-3" />
      <ul className="">
        <li>
          <Link href="/1-counter">1. Counter ➡️</Link>
        </li>
        <li>
          <Link href="/2-counter-decoration">2. Counter and decoration ➡️</Link>
        </li>
        <li>
          <Link href="/3-counter-decoration-memo">
            3. Counter, decoration and memo ➡️
          </Link>
        </li>
        <li>
          <Link href="/4-autocounter-context">4. Auto counter context ➡️</Link>
        </li>
        <li>
          <Link href="/5-autocounter-context-memo">
            5. Auto counter context + memo ➡️
          </Link>
        </li>
      </ul>
    </>
  );
}
