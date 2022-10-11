import * as React from "react";

export const SpeakingCard = props => {
    return (
        <a href={props.link}>
            <div
                className={
                    "relative flex flex-col p-6 my-6  rounded-lg bg-card-background h-56 lg:h-32 w-full drop-shadow-md transform  hover:scale-105 transition duration-300"
                }
            >
                <h5 className="mb-2 text-sm font-semibold text-headline">{props.date}</h5>
                <h5 className="mb-2 text-xl font-semibold text-headline">{props.title}</h5>
                <h5 className="mb-2 text-base font-semibold text-headline">{props.event}</h5>
            </div>
        </a>
    );
};
