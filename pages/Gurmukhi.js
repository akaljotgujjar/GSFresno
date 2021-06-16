import Head from "next/head";
import Navbar from "../components/Navbar";

function Gurmukhi() {
  return (
    <div>
      <Head>
        <title>Gurmukhi Resources | GS Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Navbar />

      <div className="m-10">
        <h1 className="lg:text-4xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 ">
          Gurmukhi Resources!
        </h1>
      </div>

      <div className="bg-yellow-100 ">
        <div className="h-120 w-80 m-auto bg-red-100">
          <h1 className="lg:text-3xl text-center font-bold tracking-wider">
            Gurmukhi Level 1
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Gurmukhi;
