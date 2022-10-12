import React from "react";
import { graphql } from "gatsby";
import { Header } from "../../Layout/Header/Header";
import "./Blog.css";

// import '../css/blog-post.css'; // make it pretty!

export default function Blog({
    data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark: post } = data; // data.markdownRemark holds your post data
    return (
        <main className="flex flex-col w-full h-full bg-background font-google">
            <Header />
            <section className="m-8 lg:px-40">
                <h1 className="text-4xl font-semibold text-center text-headline">{post.frontmatter.title}</h1>
                <h3 className="py-2 text-2xl text-center text-headline">{post.frontmatter.date}</h3>
                <div className="flex flex-row justify-center py-2 flex-wrap">
                    {post.frontmatter.tags.map((topic, i) => {
                        return (
                            <div
                                className="items-center inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full bg-card-tag-background text-card-tag-text"
                                key={i}
                            >
                                {`#${topic}`}
                            </div>
                        );
                    })}
                </div>

                <div
                    className="font-serif blog-post-content text-paragraph markdown"
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
                tags
            }
        }
    }
`;
