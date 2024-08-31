import React from "react";
import { BlogPostProps } from "@types";
import { FeaturedImage, PostContent, PostFooter } from "./partials";

export const BlogPost = ({ post }: BlogPostProps) => (
  <div className="row rounded-4 mb-3 p-4 border">
    <div className="col-12 col-md-4">
      <FeaturedImage post={post} />
    </div>
    <div className="col-12 col-md-8 align-self-center">
      <PostContent post={post} />
      <PostFooter post={post} />
    </div>
  </div>
);
