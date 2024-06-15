import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/Performance">Performance</Link>
          <Link href="/Reliability">Reliability</Link>
          <Link href="/Scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
