import * as React from "react";
import { Header } from "../components/Layout/Header/Header";

const About = () => {
    return (
        <main className="flex flex-col w-full h-screen bg-gray">
            <Header />
            <section className="m-8 lg:px-40">
                <div className="flex flex-col" id="Contact">
                    <h2 className="text-4xl font-semibold">About Me</h2>
                    <p className="py-4 font-serif text-xl text-brown">
                        Peter Okwara is a Software Developer, proficient in Full Stack and Blockchain Development. He is
                        passionate about Blockchain, the Internet of Things, Data Science and using Human Centered
                        Design to solve problems that occur all around us. His goal is to be at the forefront of
                        providing solutions in Africa.
                        <br />
                        <br />
                        Niaje
                        <a className="text-button" href="twitter.com/peterokwara">
                            &nbsp; @peterokwara
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;

export const Head = () => <title>About - Peter Okwara</title>;
