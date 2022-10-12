import React, { useState } from "react";
import { SkillCard } from "../SkillCard/SkillCard";
import { StaticImage } from "gatsby-plugin-image";
import { useSwipeable } from "react-swipeable";

export const Carousel = () => {
    const [card, setActive] = useState(0);

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

    const handlers = useSwipeable({
        onSwipedRight: () => setActive(card === 0 ? 0 : card - 1 ),
        onSwipedLeft: () => setActive(card === 2 ? 2 : card + 1 )
    });

    const cardSlider = () => {
        switch (card) {
            case 0:
                return (
                    <SkillCard heading={content[0].title} content={content[0].content}>
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
                    </SkillCard>
                );
            case 1:
                return (
                    <SkillCard heading={content[1].title} content={content[1].content}>
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
                    </SkillCard>
                );
            case 2:
                return (
                    <SkillCard heading={content[2].title} content={content[2].content}>
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
                    </SkillCard>
                );

            default:
                return;
        }
    };

    const allCards = () => {
        return (
            <>
                <SkillCard heading={content[0].title} content={content[0].content}>
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
                </SkillCard>
                <SkillCard heading={content[1].title} content={content[1].content}>
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
                </SkillCard>
                <SkillCard heading={content[2].title} content={content[2].content}>
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
                </SkillCard>
            </>
        );
    };

    return (
        <div className="py-4">
            <div {...handlers} className="flex flex-row justify-center gap-4 overflow-hidden lg:hidden transform hover:scale-105 transition duration-300">
                {cardSlider()}
            </div>
            <div className="hidden gap-4 transition duration-300 transform lg:justify-center lg:flex-row lg:flex hover:scale-105">{allCards()}</div>
            <div className="flex flex-row justify-center lg:hidden">
                <div
                    className={`w-4 h-4 ml-1 mr-1 rounded-full cursor-pointer ${
                        card === 0 ? "bg-highlight" : "bg-card-background"
                    } active:bg-focus drop-shadow-md `}
                    onClick={() => setActive(0)}
                />
                <div
                    className={`w-4 h-4 ml-1 mr-1 rounded-full cursor-pointer ${
                        card === 1 ? "bg-highlight" : "bg-card-background"
                    } active:bg-focus drop-shadow-md `}
                    onClick={() => setActive(1)}
                />
                <div
                    className={`w-4 h-4 ml-1 mr-1 rounded-full cursor-pointer ${
                        card === 2 ? "bg-highlight" : "bg-card-background"
                    } active:bg-focus drop-shadow-md `}
                    onClick={() => setActive(2)}
                />
            </div>
        </div>
    );
};
