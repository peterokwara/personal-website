import * as React from "react";
import { Menu } from "../Menu/Menu";
import { useState, useEffect } from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {});

    return (
        <header className="top-0 flex px-8 my-4 h-max md:px-12 justify-center">
            <a href="/" className="lg:hidden">
                <h1 className="content-center pb-1 text-2xl font-semibold md:text-6xl">Home</h1>
            </a>
            <button
                className="absolute z-20 block w-10 h-10 right-10 lg:hidden"
                open={open}
                onClick={() => setOpen(!open)}
            >
                <div className={` w-6 m-1 h-1 bg-black  ${open ? "-rotate-45 translate-y-2" : "rotate-0"}`}></div>
                <div className={` w-6 m-1 h-1 bg-black  ${open ? "opacity-0" : "opacity-1"}`}></div>
                <div className={` w-6  m-1 h-1 bg-black  ${open ? "rotate-45 -translate-y-2" : "rotate-0"}`}></div>
            </button>
            <div className="flex-row hidden md:flex lg:flex ">
                <a href="/" className="py-5 px-4 text-2xl font-semibold text-black">
                    Home
                </a>
                <a href="/About" className="py-5 px-4 text-2xl font-semibold text-black">
                    About
                </a>
                <a href="/Speaking" className="py-5 px-4 text-2xl font-semibold text-black">
                    Speaking
                </a>
                <a href="/Blog" className="py-5 px-4 text-2xl font-semibold text-black">
                    Blog
                </a>
                <a href="/#Contact" className="py-5 px-4 text-2xl font-semibold text-black">
                    Contact
                </a>
            </div>
            <Menu open={open} setOpen={setOpen} />
        </header>
    );
};