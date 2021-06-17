import Head from "next/head";
import Navbar from "../components/Navbar";

function LKC() {
  return (
    <div>
      <Head>
        <title>LKC Resources | GS Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Navbar />

      <main className="min-h-screen p-5">
        <section className="container mx-auto mb-10">
          <h1 className="md:text-5xl flex justify-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            Little Khalsa Club
          </h1>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              "We Are the Khalsa"
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              {" "}
              <a
                href="https://www.youtube.com/watch?v=FohqXfdzXzc"
                alt="We Are the Khalsa"
                target="_blank"
              >
                Click Here!
              </a>
            </button>
          </div>

          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              Guru Song
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              <a
                href="https://www.youtube.com/watch?v=8UXo_RnWerQ"
                alt="Guru Song"
                target="_blank"
              >
                Click Here
              </a>
            </button>
          </div>

          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              Incy Wincy Khalsa
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              <a
                href="https://www.youtube.com/watch?v=lM1sC1jwnGE"
                alt="Incy Wincy Khalsa Song"
                target="_blank"
              >
                Click Here
              </a>
            </button>
          </div>

          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              "The First Step"
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              <a
                href="https://www.youtube.com/watch?v=ejsjJg0BnIA"
                alt="The First Step"
                target="_blank"
              >
                Click Here
              </a>
            </button>
          </div>
          <div className="relative rounded-lg shadow-xl bg-white p-16 bg-gradient-to-br from-yellow-300 to-yellow-500">
            <h3 className="text-gray-900 md:text-3xl font-bold mb-4 align-center">
              Punjabi Alphabet
            </h3>
            <button className="hover:text-white md:text-lg border-solid border-2 border-red-800 p-2 rounded-xl">
              <a
                href="https://www.youtube.com/watch?v=B2GbaEW8NNM"
                alt="Punjabi Alphabet"
                target="_blank"
              >
                Click Here
              </a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LKC;
