const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const posts = graphql(`
        query {
            allWpPost{
                nodes {
                    slug
                    uri
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
                    tags {
                        nodes {
                          slug
                          name
                        }
                    }
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
                path: node.uri,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: node.slug,
                    uri: node.uri
                },
            });
            if(node.categories.nodes.length > 0){
                node.categories.nodes.forEach(category => {
                    createPage({
                        path: `/category/${category.slug}`,
                        component: path.resolve(`./src/templates/category.js`),
                        context: {
                            name: category.name,
                            slug: category.slug
                        },
                    });
                })
            };
            if(node.tags.nodes.length > 0){
                node.tags.nodes.forEach(tag => {
                    createPage({
                        path: `/tag/${tag.slug}`,
                        component: path.resolve(`./src/templates/tag.js`),
                        context: {
                            name: tag.name,
                            slug: tag.slug
                        },
                    });
                })
            };
        })
    })
 
    return Promise.all([posts])
};