import * as React from "react";
import { Header } from "../components/Layout/Header/Header";
import { BlogCard } from "../components/Common/BlogCard/BlogCard";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
    const { allMarkdownRemark: posts } = data;

    return (
        <main className="flex flex-col w-full h-screen bg-gray">
            <Header />
            <section className="m-8 lg:px-40">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold">Blog</h2>
                    <ol>
                        {posts.edges.map((post, i) => {
                            const title = post.node.frontmatter.title;
                            const description = post.node.frontmatter.description;
                            const path = post.node.frontmatter.path;

                            return (
                                <a href={path} key={i}>
                                    <BlogCard  title={title} description={description} />
                                </a>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default Blog;

export const Head = () => <title>Blog - Peter Okwara</title>;

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
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