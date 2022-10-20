import * as React from "react";

export const ProjectCard = props => {
    return (
        <a href={props.url}>
            <div
                className={
                    "relative flex flex-col p-8 my-1 rounded-lg bg-card-background h-auto lg:h-80 lg:w-full w-full drop-shadow-md transform hover:scale-105 transition duration-300"
                }
            >
                <h5 className="mb-2 text-xl font-semibold text-headline">{props.name}</h5>
                <h5 className="mb-2 text-base font-normal text-headline">{props.description}</h5>
                <div className="flex flex-row flex-wrap py-2">{props.children}</div>
            </div>
        </a>
    );
};
