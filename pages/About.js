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
      <div className="h-64 grid grid-rows-3 ">
        <div>1</div>
        <div>1</div>
        <div>1</div>

      </div>
    </div>
  );
}

export default About;
