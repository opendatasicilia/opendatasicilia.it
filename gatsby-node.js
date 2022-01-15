const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const posts = graphql(`
        query {
            allWpPost{
                nodes {
                    slug
                    uri
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
        })
    })
    
    const categories = graphql(`
        query {
            allWpCategory {
                nodes {
                    slug
                    name
                }
            }
        }
    `)
    .then(result => {
        result.data.allWpCategory.nodes.forEach(category => {
            createPage({
                path: `/category/${category.slug}`,
                component: path.resolve(`./src/templates/category.js`),
                context: {
                    name: category.name,
                    slug: category.slug
                },
            });
        })
    })

    const tags = graphql(`
        query {
            allWpTag {
                nodes {
                    slug
                    name
                }
            }
        }
    `)
    .then(result => {
        result.data.allWpTag.nodes.forEach(tag => {
            createPage({
                path: `/tag/${tag.slug}`,
                component: path.resolve(`./src/templates/tag.js`),
                context: {
                    name: tag.name,
                    slug: tag.slug
                },
            });
        })
    })

    const authors = graphql(`
        query {
            allWpUser {
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
        result.data.allWpUser.nodes.forEach(user => {
            createPage({
                path: `/author/${user.slug}`,
                component: path.resolve(`./src/templates/user.js`),
                context: {
                    slug: user.slug
                },
            });
        })
    })
 
    return Promise.all([posts, categories, tags, authors])
};