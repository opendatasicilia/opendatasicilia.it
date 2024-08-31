import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BlogPostProps } from "@types";

import placeholder from "@assets/images/placeholder.png";

export const FeaturedImage = ({ post }: BlogPostProps) => {
  const imageData =
    post.featuredImage?.node.localFile.childImageSharp?.gatsbyImageData;

  return (
    <Link to={post.uri}>
      {imageData ? (
        <GatsbyImage
          className="rounded-4 mb-3 mb-md-0"
          image={imageData}
          alt={post.title}
        />
      ) : (
        <img
          className="rounded-3 mb-3 mb-md-0"
          src={placeholder}
          alt={post.title}
        />
      )}
    </Link>
  );
};
