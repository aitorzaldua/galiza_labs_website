import Head from "next/head";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Draft Digital</title>
        <meta
          name="description"
          content="Draft Digital is a supercool Blockchain company"
        />
        <link rel="icon" href="/logoDD.png" />
      </Head>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
