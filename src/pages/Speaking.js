import * as React from "react";
import { Header } from "../components/Layout/Header/Header";
import talks from "../data/speaking.json";

const Speaking = () => {
    return (
        <main className="flex flex-col w-full h-full bg-gray">
            <Header />
            <section className="m-8 lg:px-40">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold">Speaking</h2>
                    <h2 className="py-4 text-2xl font-semibold">Upcoming Talks</h2>
                    {talks.upcoming.length !== 0 ? (
                        <ol>
                            {talks.upcoming.map((talk, i) => {
                                const title = talk.title;
                                const date = talk.date;
                                const event = talk.event;
                                const link = talk.link;

                                return (
                                    <a href={link} key={i}>
                                        <div
                                            className={
                                                "relative flex flex-col p-6 my-4 border-2 border-black rounded-lg bg-gray h-56 lg:h-20 w-full"
                                            }
                                        >
                                            <h5 className="mb-2 text-sm font-semibold text-headline">{date}</h5>
                                            <h5 className="mb-2 text-xl font-semibold text-headline">{title}</h5>
                                            <h5 className="mb-2 text-base font-semibold text-headline">{event}</h5>
                                        </div>
                                    </a>
                                );
                            })}
                        </ol>
                    ) : (
                        <p className="text-base text-brown">
                            Want me to speak at your event? Reach out to me via{" "}
                            <a href="mailto:ojakaapeter@gmail.com" className="text-button">
                                email&nbsp;
                            </a>
                            or
                            <a href="twitter.com/peterokwara" className="text-button">
                                &nbsp; twitter.
                            </a>
                        </p>
                    )}
                    <h2 className="py-4 text-2xl font-semibold">Past Talks</h2>
                    <ol>
                        {talks.past.map((talk, i) => {
                            const title = talk.title;
                            const date = talk.date;
                            const event = talk.event;
                            const link = talk.link;

                            return (
                                <a href={link} key={i}>
                                    <div
                                        className={
                                            "relative flex flex-col p-6 my-4 border-2 border-black rounded-lg bg-gray h-56 lg:h-36 w-full"
                                        }
                                    >
                                        <h5 className="mb-2 text-sm font-semibold text-headline">{date}</h5>
                                        <h5 className="mb-2 text-xl font-semibold text-headline">{title}</h5>
                                        <h5 className="mb-2 text-base font-semibold text-headline">{event}</h5>
                                    </div>
                                </a>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default Speaking;

export const Head = () => <title>Speaking - Peter Okwara</title>;
