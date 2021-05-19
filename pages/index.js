import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gobind Sarvar Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Navbar />

      <div className="grid md:grid-cols-3 gap-4 m-10">
        {/* column one */}
        <div className="col-span-2 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg max-h-20 p-5 shadow-2xl">
          <h1 className="text-white text-center lg:text-3xl font-semibold tracking-wider italic uppercase">
            "Today's Learner... Tomorrow's
            Guide"
          </h1>
        </div>
        {/* column one */}
        <div className="col-span-1 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-2xl">
          <h1 className="text-center lg:text-3xl p-5 font-semibold">GOBIND SARVAR NEWS!</h1>
          <div className="m-5 text-xl uppercase tracking-wide">
            <p className="mb-5">Welcome Back!!</p>
            <p className="mb-5">In person classes next fall!!</p>
            <p className="mb-5">Open registration will commence in July</p>
            <button className="bg-gradient-to-br from-green-500 to-green-700 p-2 rounded-xl text-white shadow-xl">Register Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
