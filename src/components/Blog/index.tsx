import React, { Fragment } from "react";
import { WpPost } from "@types";
import { BlogPost } from "./partials";

export const Blog = ({ posts }: { posts: WpPost[] }) => (
  <div className="pb-5">
    {posts.map((post, i) => (
      <Fragment key={i}>
        <BlogPost post={post} />
      </Fragment>
    ))}
  </div>
);
