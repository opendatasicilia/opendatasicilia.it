import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image";
import { format } from "date-fns";
import { it } from 'date-fns/esm/locale';
import {BiComment as CommentIcon} from 'react-icons/bi' 


export default function Post({ data }) {

    const post = data.allWpPost.nodes[0];
    const wordCount = (str) => str.split(" ").length;
    const date = format(new Date(post.date), "dd MMMM yyyy", {locale: it})

    return (
        <Layout title={post.title}>
            <div className="container mb-5">
                
                {post.featuredImage && <GatsbyImage className="rounded-4 pt-2 pb-2 border" image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.title}/>}
                <div>
                    <Link to={`/category/${post.categories.nodes[0].slug}`}>
                        <h3 className="h6 pt-4 fw-medium pb-2">
                            {post.categories.nodes[0].name.toUpperCase()}
                        </h3>
                    </Link>
                </div>
                <h1 className="h2 fw-bold pb-2">
                    {post.title}
                </h1>
                <div className="text-muted">
                    <div className="d-flex justify-content-between">
                        <h2 className="h6 fw-light">
                            Di <Link to={`/author/${post.author.node.slug}`}><b>{post.author.node.name}</b></Link> | {date}
                        </h2>
                        <span>
                            {post.comments.nodes.length} <CommentIcon/>
                        </span>
                    </div>
                    <hr className="mt-1 mb-1"/>
                    <div className="d-flex justify-content-between pt-2">
                        <span>
                            {post.tags.nodes.map((tag,i) =>
                                <div className="d-inline rounded-4 me-2" style={{padding:'5px 15px 5px 15px',backgroundColor:'#f6f3d4'}} key={i}>
                                    <Link style={{ color: "black" }} to={`/tag/${tag.slug}`}>
                                        {tag.name}
                                    </Link>
                                </div>
                            )}
                        </span>
                        <span>
                            {Math.round(wordCount(post.content) / 225)} min
                        </span>
                    </div>
                </div>
                
                <div className="pt-5 pb-5" dangerouslySetInnerHTML={{ __html: post.content }} />
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
