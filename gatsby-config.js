module.exports = {
    siteMetadata: {
        siteUrl: `https://www.peterokwara.com`,
        author: `Peter Okwara`
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-catch-links",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/blog`,
                name: "blog"
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: []
            }
        }
    ]
};
