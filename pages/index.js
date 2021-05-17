import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gobind Sarvar Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      {/* <Nav /> */}
      <Navbar />

      <div className="grid grid-cols-6">
        <div className="col-start-1 col-end-5 bg-blue-900">
          <p className="text-center mt-10 mb-10 text-3xl text-white">
            We are Gobind Sarvar, developing "Today's Learner... Tomorrow's
            Guide"
          </p>
        </div>

        <div className="col-start-5 col-end-7 bg-gradient-to-br from-yellow-300 to-yellow-500">
          <p className="text-center mt-10 text-3xl">Gobind Sarvar News</p>
        </div>
      </div>

      {/* <div className="container m-auto  ">
        <div className="flex flex-grow justify-center bg-blue-900 p-10 rounded-xl shadow-2xl">
          <p className="text-4xl text-white">
            We are Gobind Sarvar, developing "Today's Learner...Tomorrow's
            Guide"
          </p>
        </div>
      </div>

      <div className="container m-auto mt-10 ">
        <div className=" p-20 rounded-xl justify-center bg-gradient-to-br from-yellow-300 to-yellow-500 grid grid-flow-row auto-rows-max md:auto-rows-min mb-10">
          <h1 className="text-7xl justify-evenly mb-10 font-medium tracking-wide">Gobind Sarvar News</h1>
          <p className="m-10 text-blue-500 text-lg">
            Gobind Sarvar Fresno will remain open to online classes until
            further notice.
          </p>
          <p className="m-10">Online Registration Form Coming Soon!</p>
          <p className="m-10">Please visit the Resources section for course material.</p>
        </div>
      </div> */}
    </div>
  );
}
