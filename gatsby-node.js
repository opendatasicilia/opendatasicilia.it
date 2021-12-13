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
        if(result.errors){
            console.log(result.errors);
        }
        result.data.allWpPost.nodes.forEach(node => {
            createPage({
                path: `/blog/${node.slug}`,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: node.slug
                },
            });
        })
    })
 
    return Promise.all([posts])
};