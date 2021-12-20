import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import placeholder from "../assets/images/placeholder.png"

export default function Blog({data}){
   
  return(
    <div className="pt-5 pb-5">
        {
            data.map((post, i) => (
                <Link className="text-black post" to={`../blog/${post.slug}`} key={i}>
                    <div style={{border:'1px solid #dfdfdf'}} className="row rounded-4 mb-3 p-4">
                        
                        <div className="col-12 col-md-4">
                            {
                                post.featuredImage ?
                                <GatsbyImage className="rounded-4 mb-3 mb-md-0" image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.title}/> :
                                <img className="rounded-3 mb-3 mb-md-0" src={placeholder} alt={post.title}/>
                            }
                        </div>
                        
                        <div className="col-12 col-md-8 align-self-center">
                            <h2>{post.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.split('</p>').slice(0, -1) }} />
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}