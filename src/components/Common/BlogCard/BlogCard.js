import * as React from "react";

export const BlogCard = props => {
    return (
        <a href={props.path}>
            <div
                className={
                    "relative flex flex-col p-6 my-6 rounded-lg bg-card-background h-auto w-full lg:h-auto lg:w-full drop-shadow-md transform hover:scale-105 transition duration-300"
                }
            >
                <h5 className="mb-2 text-2xl font-bold text-card-headline">{props.title} </h5>
                <p className="font-normal text-card-paragraph">{props.description}</p>
                <div className="flex flex-row flex-wrap py-4">{props.children}</div>
            </div>
        </a>
    );
};
