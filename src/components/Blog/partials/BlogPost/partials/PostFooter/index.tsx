import React from "react";
import { BlogPostProps } from "@types";
import { getReadingTime } from "@utils/helpers";
import { format } from "date-fns";
import { Link } from "gatsby";
import { BiComment as CommentIcon } from "react-icons/bi";

export const PostFooter = ({ post }: BlogPostProps) => {
  const author = post.author.node;
  const formattedDate = format(new Date(post.date), "dd/MM/yyyy");
  const readingTime = getReadingTime(post.content);
  const commentCount = post.comments.nodes.length;

  return (
    <div className="text-muted">
      <span>
        di <Link to={`/author/${author.slug}`}>{author.name}</Link> |{" "}
        {formattedDate}
      </span>
      <hr className="mt-1 mb-1" />
      <div className="d-flex justify-content-between">
        <span>{readingTime} min</span>
        <span>
          {commentCount} <CommentIcon />
        </span>
      </div>
    </div>
  );
};
