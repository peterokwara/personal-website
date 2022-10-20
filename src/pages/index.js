import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Carousel } from "../components/Common/Carousel/Carousel";
import { BlogCard } from "../components/Common/BlogCard/BlogCard";
import { graphql } from "gatsby";
import { Header } from "../components/Layout/Header/Header";
import { ProjectCard } from "../components/Common/ProjectsCard/ProjectsCard";

const IndexPage = ({ data }) => {
    const { allMarkdownRemark: posts } = data;
    const { github: repositories } = data;

    return (
        <main className="flex flex-col w-fit bg-background font-google">
            <Header />
            <section className="m-8 lg:px-60 md:px-40 xl:px-90px">
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
                    <div className="flex flex-col py-3 text-center sm:text-center md:text-center lg:text-left ">
                        <h1 className="py-3 text-6xl font-semibold text-headline ">Hello I'm Peter Okwara</h1>
                        <p className="py-4 font-serif text-2xl text-paragraph">
                            I'm a Fullstack and Blockchain Developer based in Kenya.
                        </p>
                        <div className="flex flex-row justify-center gap-3 lg:justify-start">
                            <a
                                href="https://twitter.com/PeterOkwara"
                                className="text-2xl font-semibold hover:text-highlight"
                            >
                                TW
                            </a>
                            <a
                                href="https://github.com/peterokwara"
                                className="text-2xl font-semibold hover:text-highlight"
                            >
                                GH
                            </a>
                            <a
                                href="https://www.linkedin.com/in/peterokwara/"
                                className="text-2xl font-semibold hover:text-highlight"
                            >
                                LI
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-4 pt-20">
                    <h2 className="py-2 font-sans text-4xl font-semibold text-center text-headline">My Skillset</h2>
                    <Carousel />
                </div>
                <div className="py-4 pt-20">
                    <h2 className="py-2 text-4xl font-semibold text-center md:text-center lg:text-left text-headline">
                        Projects
                    </h2>
                    <div className="flex flex-col items-center lg:items-start my-6">
                        <ol className="w-full lg:grid lg:grid-cols-2 lg:gap-6">
                            {repositories.viewer.pinnedItems.edges.map((repo, i) => {
                                const name = repo.node.name;
                                const description = repo.node.description;
                                const url = repo.node.url;
                                const topics = repo.node.repositoryTopics.edges.map((topic, i) => {
                                    return (
                                        <div
                                            className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-normal rounded-full bg-card-tag-background text-card-tag-text"
                                            key={i}
                                        >
                                            {`#${topic.node.topic.name}`}
                                        </div>
                                    );
                                });

                                return (
                                    <ProjectCard key={i} name={name} description={description} url={url}>
                                        {topics}
                                    </ProjectCard>
                                );
                            })}
                        </ol>
                    </div>
                    <a href="https://github.com/peterokwara">
                        <h3 className="py-2 text-lg font-semibold underline lg:text-left text-headline">
                            View more pojects ->
                        </h3>
                    </a>
                </div>
                <div className="py-4 pt-20">
                    <h2 className="py-2 text-4xl font-semibold text-center lg:text-left text-headline">
                        Latest Articles
                    </h2>
                    <div className="flex flex-col items-center lg:items-start">
                        <ol className="w-full">
                            {posts.edges.map((post, i) => {
                                const title = post.node.frontmatter.title;
                                const description = post.node.frontmatter.description;
                                const path = post.node.frontmatter.path;
                                const postTopics = post.node.frontmatter.tags.map((topic, i) => {
                                    return (
                                        <div
                                            className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-normal rounded-full bg-card-tag-background text-card-tag-text"
                                            key={i}
                                        >
                                            {`#${topic}`}
                                        </div>
                                    );
                                });
                                return (
                                    <BlogCard title={title} description={description} path={path} key={i}>
                                        {postTopics}
                                    </BlogCard>
                                );
                            })}
                        </ol>
                    </div>
                    <a href="/Blog">
                        <h3 className="py-2 text-lg font-semibold underline lg:text-left text-headline">
                            View more posts ->
                        </h3>
                    </a>
                </div>
                <div className="flex flex-col pt-20" id="Contact">
                    <h2 className="font-sans text-4xl font-semibold text-center text-headline">Get in touch</h2>
                    <p className="py-4 font-serif text-xl text-center text-paragraph">
                        Are you interested in collaborating or want to connect or chat? If so, hit the contact button
                        down below or contact me via{" "}
                        <a href="https://www.linkedin.com/in/peterokwara/" className="text-highlight">
                            Linkedin.
                        </a>
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:ojakaapeter@gmail.com">
                            <button
                                arai-label="Email button"
                                className="w-32 bg-button hover:bg-button text-button-text px-5 py-2.5 mr-2 mb-2 font-bold rounded-md text-center drop-shadow-md"
                            >
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
                        tags
                    }
                }
            }
        }
        github {
            viewer {
                id
                pinnedItems(first: 4) {
                    edges {
                        node {
                            ... on GitHub_Repository {
                                id
                                name
                                description
                                url
                                repositoryTopics(first: 5) {
                                    edges {
                                        node {
                                            id
                                            topic {
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
