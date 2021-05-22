import Head from "next/head";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Resources() {
  return (
    <div>
      <Head>
        <title>Resources | GS Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Navbar />

      <div className="m-10">
        <h1 className="lg:text-4xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 ">
          Welcome to Gobind Sarvar Fresno's Resources!
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 m-10">
        <div className="bg-red-100 col-span-1 p-10 rounded-lg shadow-xl ">
          <Link href="/Gurmukhi">
            <a className="lg:text-3xl font-bold tracking-wider justify-items-center">
              Gurmukhi
            </a>
          </Link>
        </div>
        <div className="bg-blue-100 col-span-1 p-10 rounded-lg shadow-xl">
          <Link href="/LKC">
            <a className="lg:text-3xl font-bold tracking-wider">
              Little Khalsa Club
            </a>
          </Link>
        </div>
        <div className="bg-yellow-100 col-span-2 p-10 mx-20 rounded-lg shadow-xl">
          <Link href="/GSRes">
            <a className="lg:text-3xl font-bold tracking-wider">
              Gobind Sarvar Resources
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resources;
