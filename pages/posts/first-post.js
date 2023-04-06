import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      {/* Meta Data */}
      <Head>
        <title>First Post - Powered by Next.js</title>
      </Head>
      {/* Content */}
      <h1>Hello, this is First Post!!!</h1>
      <Link href="/">Go back home!</Link>
    </Layout>
  );
}
