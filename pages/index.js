import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gobind Sarvar Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Nav />

      <div className="container m-auto  ">
        <div className="flex flex-grow justify-center bg-blue-900 p-10 rounded-xl shadow-2xl">
          <p className="text-4xl text-white">
            We are Gobind Sarvar, developing "Today's Learner...Tomorrow's
            Guide"
          </p>
        </div>
      </div>

      <div className="container m-auto mt-10">
        <div className="flex flex-grow p-20 rounded-xl justify-center bg-gradient-to-br from-yellow-300 to-yellow-500 ">
          <h1 className="text-7xl justify-evenly">Gobind Sarvar News</h1>
          <p className="">
            Gobind Sarvar Fresno will remain open to online classes until
            further notice.
          </p>
          <p>Online Registration Form Coming Soon!</p>
          <p>Please visit the Resources section for course material.</p>
        </div>
      </div>
    </div>
  );
}
