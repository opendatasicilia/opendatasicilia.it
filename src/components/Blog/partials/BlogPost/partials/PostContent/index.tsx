import React from "react";
import { BlogPostProps } from "@types";
import { Link } from "gatsby";

export const PostContent = ({ post }: BlogPostProps) => {
  const category = post.categories?.nodes?.[0];

  return (
    <>
      {category && (
        <Link to={`/category/${category.slug}`}>
          <h3 className="h6 fw-medium pb-2">{category.name.toUpperCase()}</h3>
        </Link>
      )}
      <Link className="text-black post" to={post.uri}>
        <h2 className="h4 fw-bold">{post.title}</h2>
      </Link>
      {post.excerpt && (
        <div
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          className="post-excerpt"
        />
      )}
    </>
  );
};
