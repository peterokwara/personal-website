import * as React from "react";

export const BlogCard = props => {
    return (
        <div
            className={
                "relative flex flex-col p-6 my-4 rounded-lg bg-card-background h-60 w-full lg:h-40 drop-shadow-md        "
            }
        >
            <h5 className="mb-2 text-2xl font-bold text-card-headline">{props.title} </h5>
            <p className="font-normal text-card-paragraph">{props.description}</p>
        </div>
    );
};
