import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Carousel } from "../components/Common/Carousel/Carousel";
import { BlogCard } from "../components/Common/BlogCard/BlogCard";
import { graphql } from "gatsby";
import { Header } from "../components/Layout/Header/Header";

const IndexPage = ({ data }) => {
    const { allMarkdownRemark: posts } = data;

    return (
        <main className="flex flex-col w-full bg-gray">
            <Header />
            <section className="m-8 lg:px-40">
                <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center">
                    <div className="flex justify-center">
                        <StaticImage
                            className="bg-center rounded-full"
                            src="../images/peter.png"
                            width={400}
                            height={400}
                            alt="Peter Okwara"
                        />
                    </div>
                    <div className="flex flex-col py-3 text-center sm:text-center md:text-center ">
                        <h1 className="py-3 font-sans text-6xl font-semibold text-black">Hello I'm Peter Okwara</h1>
                        <p className="py-4 font-serif text-2xl text-brown">
                            I'm a Fullstack and Blockchain Developer based in Kenya.
                        </p>
                    </div>
                </div>
                <div className="py-4 pt-15">
                    <h2 className="py-2 text-4xl font-semibold text-center">My Skillset</h2>
                    <Carousel />
                </div>
                <div className="py-4 pt-15">
                    <h2 className="py-2 text-4xl font-semibold text-center lg:text-left">Latest Articles</h2>
                    <div className="flex flex-col items-center lg:items-start">
                        <ol>
                            {posts.edges.map((post, i) => {
                                const title = post.node.frontmatter.title;
                                const description = post.node.frontmatter.description;
                                const path = post.node.frontmatter.path;

                                return (
                                    <a href={path} key={i}>
                                        <BlogCard title={title} description={description} />
                                    </a>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col pt-15" id="Contact">
                    <h2 className="text-4xl font-semibold text-center">Get in touch</h2>
                    <p className="py-4 font-serif text-xl text-center text-brown">
                        Are you interested in collaborating or want to connect or chat? If so, hit the contact button
                        down below or contact me via{" "}
                        <a href="https://www.linkedin.com/in/peterokwara/" className="text-button">
                            Linkedin.
                        </a>
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:ojakaapeter@gmail.com">
                            <button className="w-32 bg-button hover:bg-button-focus text-white px-5 py-2.5 mr-2 mb-2 font-bold rounded-md text-center">
                                Say Hello
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page - Peter Okwara</title>;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 3) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        path
                    }
                }
            }
        }
    }
`;
