import Head from "next/head";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Services from "./Services";
import Contact from "./Contact";
import AuditProcess from "./AuditProcess";
import Audits from "./Audits";

export default function Home() {
  return (
    <div>
      <Head>
        <title>draft digital</title>
        <meta
          name="description"
          content="Draft Digital is a Web3 security company dedicated to providing high standards of protection and security for our partners and their projects. "
        />
        <link rel="icon" href="/DDfav2.png" sizes="460x542" />
      </Head>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <AuditProcess />
        <Audits />
        <Contact />
      </div>
    </div>
  );
}
