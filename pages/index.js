import Head from "next/head";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Services from "./Services";
import Contact from "./Contact";
import AuditProcess from "./AuditProcess";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Draft Digital</title>
        <meta
          name="description"
          content="Draft Digital is a supercool Blockchain company"
        />
        <link rel="icon" href="/DraftDigitalLogo.png" />
      </Head>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <AuditProcess />
        <Contact />
      </div>
    </div>
  );
}
