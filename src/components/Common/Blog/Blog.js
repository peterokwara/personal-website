import React from "react";
import { graphql } from "gatsby";
import { Header } from "../../Layout/Header/Header";

// import '../css/blog-post.css'; // make it pretty!

export default function Blog({
    data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark: post } = data; // data.markdownRemark holds your post data
    return (
        <main className="flex flex-col w-full h-screen bg-background">
            <Header />
            <section className="m-8 lg:px-40">
                <h1 className="text-4xl font-semibold text-headline">{post.frontmatter.title}</h1>
                <div
                    className="font-serif blog-post-content text-paragraph"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </section>
        </main>
    );
}

export const Head = ({ data }) => {
    const { markdownRemark: post } = data; // data.markdownRemark holds your post data

    return <title>{post.frontmatter.title}</title>;
};

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
