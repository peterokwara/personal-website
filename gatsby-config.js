require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

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
        "gatsby-plugin-sass",
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
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "GitHub",
                fieldName: "github",
                url: "https://api.github.com/graphql",
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`
                }
            }
        }
    ]
};
