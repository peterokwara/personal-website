import React, { useState } from "react";
import { Card } from "../Card/Card";
import { StaticImage } from "gatsby-plugin-image";

export const Carousel = () => {
    const [card, setActive] = useState(1);

    const content = [
        {
            title: "Full Stack",
            content:
                "I have developed apps using React, Fastify, Nodejs using Typescript and Javascript. I have also done unit testing using Jest, Enzyme, Chai and Mocha."
        },
        {
            title: "DevOps",
            content:
                "Worked with the most common DevOps tools such as Docker, Docker-Compose, Bash, Elasticsearsch, Kibana, Fluentd, Kibana and Kubernetes."
        },
        {
            title: "Blockchain",
            content: "I have experience with Ethereum, IOTA and EOS Blockchains"
        }
    ];

    const cardSlider = () => {
        switch (card) {
            case 1:
                return (
                    <Card heading={content[0].title} content={content[0].content}>
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/react.png"
                            width={40}
                            height={40}
                            alt="react"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/fastify.png"
                            width={120}
                            height={40}
                            alt="fastify"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/nodejs.png"
                            width={40}
                            height={40}
                            alt="nodejs"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/typescript.png"
                            width={40}
                            height={40}
                            alt="typescript"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/javascript.png"
                            width={40}
                            height={40}
                            alt="javascript"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/scss.png"
                            width={40}
                            height={40}
                            alt="scss"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/tailwind.png"
                            width={40}
                            height={40}
                            alt="tailwind"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/jest.png"
                            width={40}
                            height={40}
                            alt="jest"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/chai.png"
                            width={40}
                            height={40}
                            alt="chai"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/mocha.png"
                            width={40}
                            height={40}
                            alt="mocha"
                        />
                    </Card>
                );
            case 2:
                return (
                    <Card heading={content[1].title} content={content[1].content}>
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/docker.png"
                            width={40}
                            height={40}
                            alt="docker"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/bash.png"
                            width={40}
                            height={40}
                            alt="bash"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/kubernetes.png"
                            width={40}
                            height={40}
                            alt="kubernetes"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/elastic.svg"
                            width={40}
                            height={40}
                            alt="elastic"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/kibana.png"
                            width={40}
                            height={40}
                            alt="kibana"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/fluentd.png"
                            width={40}
                            height={40}
                            alt="fluentd"
                        />
                    </Card>
                );
            case 3:
                return (
                    <Card heading={content[2].title} content={content[2].content}>
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/ethereum.png"
                            width={40}
                            height={40}
                            alt="ethereum"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/iota.png"
                            width={40}
                            height={40}
                            alt="iota"
                        />
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../../../images/eos.png"
                            width={40}
                            height={40}
                            alt="eos"
                        />
                    </Card>
                );

            default:
                return;
        }
    };

    const allCards = () => {
        return (
            <>
                <Card heading={content[0].title} content={content[0].content}>
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/react.png"
                        width={40}
                        height={40}
                        alt="react"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/fastify.png"
                        width={120}
                        height={40}
                        alt="fastify"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/nodejs.png"
                        width={40}
                        height={40}
                        alt="nodejs"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/typescript.png"
                        width={40}
                        height={40}
                        alt="typescript"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/javascript.png"
                        width={40}
                        height={40}
                        alt="javascript"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/scss.png"
                        width={40}
                        height={40}
                        alt="scss"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/tailwind.png"
                        width={40}
                        height={40}
                        alt="tailwind"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/jest.png"
                        width={40}
                        height={40}
                        alt="jest"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/chai.png"
                        width={40}
                        height={40}
                        alt="chai"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/mocha.png"
                        width={40}
                        height={40}
                        alt="mocha"
                    />
                </Card>
                <Card heading={content[1].title} content={content[1].content}>
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/docker.png"
                        width={40}
                        height={40}
                        alt="docker"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/bash.png"
                        width={40}
                        height={40}
                        alt="bash"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/kubernetes.png"
                        width={40}
                        height={40}
                        alt="kubernetes"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/elastic.svg"
                        width={40}
                        height={40}
                        alt="elastic"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/kibana.png"
                        width={40}
                        height={40}
                        alt="kibana"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/fluentd.png"
                        width={40}
                        height={40}
                        alt="fluentd"
                    />
                </Card>
                <Card heading={content[2].title} content={content[2].content}>
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/ethereum.png"
                        width={40}
                        height={40}
                        alt="ethereum"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/iota.png"
                        width={40}
                        height={40}
                        alt="iota"
                    />
                    <StaticImage
                        className="bg-center rounded-full"
                        src="../../../images/eos.png"
                        width={40}
                        height={40}
                        alt="eos"
                    />
                </Card>
            </>
        );
    };

    return (
        <div className="py-4">
            <div className="flex flex-row justify-center gap-4 overflow-hidden md:hidden lg:hidden">{cardSlider()}</div>
            <div className="hidden gap-4 lg:justify-center lg:flex-row lg:flex">{allCards()}</div>
            <div className="flex flex-row justify-center lg:hidden">
                <div
                    className="w-4 h-4 ml-1 mr-1 bg-white border-2 border-black rounded-full cursor-pointer hover:bg-focus focus:bg-focus active:bg-focus"
                    onClick={() => setActive(1)}
                />
                <div
                    className="w-4 h-4 ml-1 mr-1 bg-white border-2 border-black rounded-full cursor-pointer hover:bg-focus focus:bg-focus active:bg-focus"
                    onClick={() => setActive(2)}
                />
                <div
                    className="w-4 h-4 ml-1 mr-1 bg-white border-2 border-black rounded-full cursor-pointer hover:bg-focus focus:bg-focus active:bg-focus"
                    onClick={() => setActive(3)}
                />
            </div>
        </div>
    );
};
