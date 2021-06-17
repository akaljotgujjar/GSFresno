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

      <main className="min-h-screen p-5">
        <section className="container mx-auto mb-10">
          <h1 className="md:text-5xl flex justify-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            Gurmukhi Level 1
          </h1>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              Let Us Learn Gurmukhi (Book 1)
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              {" "}
              <a
                href="https://archive.org/details/LetUsLearnGurmukhi-Book1/mode/2up"
                alt="Let Us Learn Gurmukhi"
                target="_blank"
              >
                Click Here!
              </a>
            </button>
          </div>
          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              Let Us Learn Gurmukhi (Book 2)
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              <a
                href="https://archive.org/details/LetUsLearnGurmukhi-Book2/mode/2up"
                alt="Let Us Learn Gurmukhi"
                target="_blank"
              >
                Click Here
              </a>
            </button>
          </div>
        </section>
      </main>

      {/* <div className="m-10">
        <h1 className="lg:text-4xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 ">
          Gurmukhi Resources!
        </h1>
      </div>

      <div className="">
        <div className="h-120 w-80 m-auto">
          <h1 className="lg:text-3xl text-center font-bold tracking-wider">
            Gurmukhi Level 1
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-5 p-5">
          <div className="bg-yellow-100">1</div>
          <div className="bg-blue-100">2</div>
          <div className="bg-red-100">3</div>
        </div>
      </div> */}
    </div>
  );
}

export default Gurmukhi;
