import * as React from "react";

export const Articles = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug;

                return (
                    <li key={post.fields.slug}>
                        <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                            <header>
                                <h2>
                                    <h1 to={post.fields.slug} itemProp="url">
                                        <span itemProp="headline">{title}</span>
                                    </h1>
                                </h2>
                                <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: post.frontmatter.description || post.excerpt
                                    }}
                                    itemProp="description"
                                />
                            </section>
                        </article>
                    </li>
                );
            })}
        </ol>
    );
};

// export const pageQuery = graphql`
//     query BlogPostByPath($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }) {
//             html
//             frontmatter {
//                 date(formatString: "MMMM DD, YYYY")
//                 path
//                 title
//             }
//         }
//     }
// `;
