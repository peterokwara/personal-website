import * as React from "react";
import { Header } from "../components/Layout/Header/Header";

const About = () => {
    return (
        <main className="flex flex-col h-screen bg-background font-google">
            <Header />
            <section className="flex flex-col justify-center max-w-3xl px-8 mx-auto">
                <div className="flex flex-col" id="Contact">
                    <h2 className="text-4xl font-semibold text-headline">About Me</h2>
                    <p className="py-4 text-base text-paragraph">
                        Peter Okwara is a Software Developer, proficient in Full Stack and Blockchain Development. He is
                        passionate about Blockchain, the Internet of Things, Data Science and using Human Centered
                        Design to solve problems that occur all around us. His goal is to be at the forefront of
                        providing solutions in Africa.
                        <br />
                        <br />
                        Say hi
                        <a className="text-link" href="twitter.com/peterokwara">
                            &nbsp;@peterokwara
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;

export const Head = () => <title>About - Peter Okwara</title>;
