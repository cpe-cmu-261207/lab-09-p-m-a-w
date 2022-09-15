import Link from "next/link";
import React from "react";

export default function Navbar() {
  return <div className="d-flex justify-content-center gap-5 my-4">
    <Link href="/"><a href="">Home</a></Link>
    <Link href="/experience"><a href="">Experience</a></Link>
    <Link href="/contact"><a href="">Contact</a></Link>
    <Link href="/lab-07"><a href="">Lab-07</a></Link>
  </div>;
}
