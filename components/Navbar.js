import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex items-center flex-wrap p-3">
      <Image
        className=""
        src="/../public/GS logo.png"
        width={110}
        height={140}
      />
      <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto m-10 text-xl">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center">
              Home
            </a>
          </Link>
          <Link href="/About">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center">
              About
            </a>
          </Link>
          <Link href="/Resources">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center">
              Resources
            </a>
          </Link>
          <Link href="/Contact">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;