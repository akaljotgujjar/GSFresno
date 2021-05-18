import Head from "next/head";
import Nav from "../components/Nav";

function About() {
  return (
    <div>
      <Head>
        <title>About | GS Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Nav />
      <div className="h-64 grid grid-rows-3 grid-flow-col">
        About
        </div>
    </div>
  );
}

export default About;
