import * as React from "react";

export const BlogCard = props => {
    return (
        <div className={"relative flex flex-col p-6 my-4 border-2 border-black rounded-lg bg-gray h-60 w-full lg:h-40"}>
            <h5 className="mb-2 text-2xl font-bold text-headline">{props.title} </h5>
            <p className="font-normal text-paragraph">{props.description}</p>
        </div>
    );
};
