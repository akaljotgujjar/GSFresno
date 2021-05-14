import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <div className="flex flex-col sm:flex-row sm:px-20 m-10 justify-center items-center h-auto mt-10">
      <Image
        className="justify-start my-100"
        src="/../public/GS logo.png"
        width={140}
        height={180}
      />
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <h1>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </h1>
        <h1>
          <Link href="/About">
            <a>ABOUT</a>
          </Link>
        </h1>
        <h1>
          <Link href="/Resources">
            <a>RESOURCES</a>
          </Link>
        </h1>
        <h1>
          <Link href="/Contact">
            <a>CONTACT</a>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Nav;
