const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const posts = graphql(`
        query {
            allWpPost{
                nodes {
                    slug
                }
            }
        }
    `)
    .then(result => {
        result.data.allWpPost.nodes.forEach(node => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: node.slug
                },
            });
        })
    })
 
    return Promise.all(
        [posts]
    )
};