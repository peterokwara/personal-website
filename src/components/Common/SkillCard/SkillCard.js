import * as React from "react";

export const SkillCard = props => {
    return (
        <div className="relative flex flex-col w-full p-6 my-4 rounded-lg bg-card-background h-96 drop-shadow-md  lg:transform lg:hover:scale-105 lg:transition lg:duration-300 ">
            <h5 className="mb-2 text-2xl font-bold text-card-headline">{props.heading}</h5>
            <p className="font-normal text-card-paragraph">{props.content}</p>
            <br />
            <div className="absolute bottom-0 flex flex-wrap gap-2 py-4">{props.children}</div>
        </div>
    );
};
