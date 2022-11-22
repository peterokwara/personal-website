import * as React from "react";
import { SpeakingCard } from "../components/Common/SpeakingCard/SpeakingCard";
import { Header } from "../components/Layout/Header/Header";
import talks from "../data/speaking.json";

const Speaking = () => {
    return (
        <main className="flex flex-col h-screen font-google bg-background">
            <Header />
            <section className="flex flex-col justify-center max-w-3xl px-8 mx-auto">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold text-headline">Speaking</h2>
                    <h2 className="py-4 text-2xl font-semibold text-headline">Upcoming Talks</h2>
                    {talks.upcoming.length !== 0 ? (
                        <ol>
                            {talks.upcoming.map((talk, i) => {
                                const title = talk.title;
                                const date = talk.date;
                                const event = talk.event;
                                const link = talk.link;

                                return <SpeakingCard date={date} title={title} event={event} link={link} key={i} />;
                            })}
                        </ol>
                    ) : (
                        <p className="text-base font-normal text-brown text-paragraph">
                            Want me to speak at your event? Reach out to me via{" "}
                            <a href="mailto:ojakaapeter@gmail.com" className="text-highlight">
                                email&nbsp;
                            </a>
                            or
                            <a href="twitter.com/peterokwara" className="text-highlight">
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

                            return <SpeakingCard date={date} title={title} event={event} link={link} key={i} />;
                        })}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default Speaking;

export const Head = () => <title>Speaking - Peter Okwara</title>;
