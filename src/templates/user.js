import React from "react"
import { graphql } from "gatsby"
import Blog from '../components/Blog'
import Layout from "../components/Layout"
import Author from "../components/Author"

export default function User({ data }) {
    
    const user = data.allWpUser.nodes[0];
    const posts = data.allWpPost.nodes;

    const NumeroArticoli = () => {
        const n = posts.length;
        return n > 0 ? <>{`${n} ${n == 1 ? 'articolo pubblicato' : 'articoli pubblicati'}`}</> : null  
    }

    return (
        <Layout>
            <div className="container">
                <Author user={user}/>
                <div className="row pt-5 pb-5">
                    <div className="col-12 col-lg-1"/>
                    <div className="col-12 col-lg-11">
                        <h4>
                            <NumeroArticoli/>
                        </h4>
                        <Blog data={posts}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
    query($slug: String!) {
        allWpUser(filter: {slug: {eq: $slug}}) {
            nodes {
                name
                slug
                description
                avatar {
                    url
                }
            }
        }
        allWpPost(filter: {author: {node: {slug: {eq: $slug}}}}){
            nodes{
                ...Post
                featuredImage {
                    node {
                        localFile {
                            childImageSharp {
                              gatsbyImageData(
                                placeholder: DOMINANT_COLOR,
                                formats: AUTO,
                                quality: 100
                              )
                            }
                        }
                    }
                }
            }
        }
    }
`
