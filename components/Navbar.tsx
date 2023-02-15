import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-evenly w-[100%]">
      <Link href="/">
        <button
          className="rounded-full p-3 flex items-center justify-center hover:bg-light"
          type="button"
          name="button"
        >
          <Image
            alt="logo"
            src="./logo.webp"
            className="w-12 h-12"
            width="48"
            height="48"
          />
        </button>
      </Link>
      <Link href="/">
        <button
          className="rounded-full py-3 px-3 font-semibold"
          type="button"
          name="button"
        >
          Home
        </button>
      </Link>
      <button
        className="rounded-full py-3 px-2 font-semibold"
        type="button"
        name="button"
      >
        Today
      </button>
      <button
        className="rounded-full py-3 px-3 font-semibold"
        type="button"
        name="button"
      >
        Create
      </button>
      <form className="flex-grow relative max-w-[700px]">
        <span className="absolute mt-4 ml-3 text-muted">
          <Image
            width="16"
            height="16"
            alt="search"
            src="https://icongr.am/clarity/search.svg?size=128&color=5f5f5f"
          />
        </span>
        <input
          type="text"
          className="text-muted w-full hover:bg-lightHover rounded-full text-pinterest-logo-gray bg-pinterest-navbar-gray py-3 pr-3 pl-10"
          placeholder="Search"
        />
      </form>
      <div className="flex items-center">
        <button className="relative rounded-full hover:bg-light flex items-center justify-center px-4">
          <Image
            width="30"
            height="30"
            alt="user"
            src="https://icongr.am/octicons/person.svg?size=148&color=242424"
          />
        </button>
        <button className="relative rounded-full hover:bg-light flex items-center justify-center px-4">
          <Image
            width="30"
            height="30"
            alt="bookmar"
            src="https://icongr.am/octicons/bookmark-fill.svg?size=148&color=242424"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
