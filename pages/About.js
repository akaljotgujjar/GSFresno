import Head from "next/head";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Image from "next/image";

function About() {
  return (
    <div>
      <Head>
        <title>About | GS Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Navbar />

      <div className="container md:mx-auto p-5 flex justify-center shadow-lg bg-gray-500 bg-opacity-20 rounded-2xl">
        <p className="m-10 md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 font-semibold">
          What is Gobind Sarvar?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 m-10">
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 col-span-1 rounded-lg shadow-2xl">
          <h1 className="text-center text-lg font-bold">Our Mission</h1>
          <p className="m-5">
            At Gobind Sarvar, we aim to provide a GurSikhi orientated school,
            within which all the students work hard to realise their full
            blessing of Gurmat (Guru Ji's teachings & values), Gurbani (Guru
            Ji's sacred utterances) and Gurbani Kirtan (the Sikh musical art
            form of singing Gods praises), and provide a caring and loving
            environment to lay the foundations on which the practice of Sikhi is
            fostered and nurtured.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-800 col-span-1 rounded-lg shadow-2xl">
          <h1 className="text-center text-lg font-bold text-white">About Us</h1>
          <p className="m-5 text-white">
            Gobind Sarvar is a Non-Profit organization run by volunteer members
            who work in partnership to carry out all services of the institute.
            The school's ethos is based on the teachings of Sahib Sri Guru Nanak
            Dev Ji. The Sikh ethos is embedded in all learning curricular.
            Gobind Sarvar proudly serves as a regional hub for Sikh Education in
            California, drawing its student population from various
            municipalities in the Central Valley, as well as other parts of the
            state. Students attend the institute in addition to attending
            regular K-12 public schools. Thus, students take their
            extracurricular classes at the institute in the evenings and
            weekends.
          </p>
        </div>
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 col-span-1 rounded-lg shadow-2xl">
          <h1 className="text-center text-lg font-bold">Our Goal</h1>
          <p className="m-5">
            To provide quality Gurmat education that is balanced and relevant to
            the needs of pupils within a modern society. To enable students to
            develop their latent spiritual potential by connecting with Gurbani,
            through the highest standards of teaching and learning, developing
            self-esteem, confidence, independence and engender consideration for
            others through the concept of Sewa. To encourage every member of our
            student community to invest in developing all aspects of Sikhi by
            providing opportunities in learning of Gurmukhi, Gurbani Kirtan, and
            Gurmat to strengthen every students' spiritual and physical
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
