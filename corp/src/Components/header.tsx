import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/Performance">Performance</Link>
        <Link href="/Reliability">Reliability</Link>
        <Link href="/Scale">Scale</Link>
      </div>
    </div>
  );
};

export default Header;
