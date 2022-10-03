import * as React from "react";

export const Card = props => {
    return (
        <div className={"relative flex flex-col p-6 my-4 border-2 border-black rounded-lg bg-gray h-80 w-full"}>
            <h5 className="mb-2 text-2xl font-bold text-headline">{props.heading}</h5>
            <p className="font-normal text-paragraph">{props.content}</p>
            <br />
            <div className="absolute bottom-0 flex flex-wrap gap-2 pb-4">{props.children}</div>
        </div>
    );
};
