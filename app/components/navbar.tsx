"use client"
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {

  return (
    <nav className="bg-transparent p-2 flex justify-between">
      <Link href="/about" className="text-black font-bold">
        {/* <h1 className="font-serif text-2xl">Zarak</h1> */}
        <Image src="/1.png" alt="main" width={100} height={50}/> 
      </Link>
      <ul className="flex items-center text-xl text-foreground">
        <li>
          <Link href="#" className=" px-4 py-2 rounded-md font-serif">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className=" px-4 py-2 rounded-md font-serif">
            Contact
          </Link>
        </li>
        <li>
          <Link href="#" className=" px-4 py-2 rounded-md font-serif">
            Shop
          </Link>
        </li>
        <li>
          <Link href="#" className=" px-4 py-2 rounded-md font-serif">
            Home
          </Link>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
}