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
      <h1 className="text-red-500">About</h1>
    </div>
  );
}

export default About;
