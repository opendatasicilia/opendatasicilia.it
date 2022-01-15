import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image";
import {format} from "date-fns"

export default function Post({ data }) {
    const post = data.allWpPost.nodes[0]
    const date = format(new Date(post.date), "dd/MM/yyyy")
    return (
        <Layout title={post.title}>
            <div className="container mb-5">
                <h1>{post.title}</h1>
                <h2 style={{fontWeight:'300'}}>Di <b>{post.author.node.name}</b> | Pubblicato {date}</h2>
                {post.featuredImage && <GatsbyImage className="rounded pt-2 pb-2" image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.title}/>}
                <div className="pt-4 pb-5" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
    query($slug: String!) {
        allWpPost(filter: { slug: { eq: $slug } }) {
            nodes {
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
