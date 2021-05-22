import Head from "next/head";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | GS Fresno</title>
        <link rel="icon" href="/GS logo.png" />
      </Head>

      <Navbar />
      <div className="m-10">
        <h1 className="text-4xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          Contact Us Below!
        </h1>
      </div>

      
    </div>
  );
}

export default Contact;
