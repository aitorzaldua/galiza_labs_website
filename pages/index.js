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
        <title>Draft Digital</title>
        <meta
          name="description"
          content="Draft Digital is a supercool Blockchain company"
        />
        <link rel="icon" href="/DDfavicon.png" sizes="512x512"/>
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
