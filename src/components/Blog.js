import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import placeholder from "../assets/images/placeholder.png"
import {format} from "date-fns"
import {BiComment as CommentIcon} from 'react-icons/bi' 

export default function Blog({data}){

    const wordCount = (str) => str.split(" ").length
   
  return(
    <div className="pt-5 pb-5">
        {
            data.map((post, i) => (
                <Link className="text-black post" to={`../blog/${post.slug}`} key={i}>
                    <div style={{border:'1px solid #dfdfdf'}} className="row rounded-4 mb-3 p-4">
                        
                        <div className="col-12 col-md-4">
                            {
                                post.featuredImage ?
                                    <GatsbyImage className="rounded-4 mb-3 mb-md-0" image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.title}/>
                                :
                                    <img className="rounded-3 mb-3 mb-md-0" src={placeholder} alt={post.title}/>
                            }
                        </div>
                        
                        <div className="col-12 col-md-8 align-self-center">
                            <h2 className="h4 fw-bold">{post.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt }}/>
                            <div className="text-muted">
                                <span>
                                    di {post.author.node.name} | {format(new Date(post.date), "dd/MM/yyyy")}
                                </span>
                                <hr className="mt-1 mb-1"/>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        {Math.round(wordCount(post.content) / 225)} min
                                    </span>
                                    <span>
                                        {post.comments.nodes.length} <CommentIcon/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}