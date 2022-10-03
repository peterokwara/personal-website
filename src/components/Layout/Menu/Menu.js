import * as React from "react";

export const Menu = props => {
    return (
        <div
            className={`fixed top-0 left-0 z-10 items-center justify-center w-screen h-screen lg:hidden md:hidden bg-background opacity-80 ${
                props.open ? "flex" : "hidden"
            }`}
        >
            <div className="flex flex-col text-center">
                <a
                    href="/About"
                    className="py-5 text-5xl font-semibold text-black"
                    onClick={() => props.setOpen(!props.open)}
                >
                    About
                </a>
                <a
                    href="/Speaking"
                    className="py-5 text-5xl font-semibold text-black"
                    onClick={() => props.setOpen(!props.open)}
                >
                    Speaking
                </a>
                <a
                    href="/Blog"
                    className="py-5 text-5xl font-semibold text-black"
                    onClick={() => props.setOpen(!props.open)}
                >
                    Blog
                </a>
                <a
                    href="/#Contact"
                    className="py-5 text-5xl font-semibold text-black"
                    onClick={() => props.setOpen(!props.open)}
                >
                    Contact
                </a>
            </div>
        </div>
    );
};
