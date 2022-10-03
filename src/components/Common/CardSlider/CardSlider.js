import * as React from "react"

export const CardSlider = (props) => {
    return (
        <div className={`block w-full p-6 my-4 bg-white border border-black rounded-lg ${props.display}`} >
            <h5 className="mb-2 text-2xl font-bold text-headline">{props.heading}</h5>
            <p className="font-normal text-paragraph">{props.content}</p>
        </div >)
}

