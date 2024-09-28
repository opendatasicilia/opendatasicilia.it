import React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "@components";
import { GatsbyImage } from "gatsby-plugin-image";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { BiComment as CommentIcon } from "react-icons/bi";
import { TemplateProps, WpTag } from "@types";
import { getReadingTime } from "@utils/helpers";
import { Badge } from "../components/Ui/Badge";

export default function Post({ data }: TemplateProps) {
  const post = data.allWpPost.nodes[0];
  const date = format(new Date(post.date), "dd MMMM yyyy", { locale: it });

  return (
    <Layout title={post.title}>
      <div className="container mb-5">
        {post.featuredImage && (
          <GatsbyImage
            className="rounded-4 pt-2 pb-2 border"
            image={
              post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            }
            alt={post.title}
          />
        )}
        <div>
          <Link to={`/category/${post.categories.nodes[0].slug}`}>
            <h3 className="h6 pt-4 fw-medium pb-2">
              {post.categories.nodes[0].name.toUpperCase()}
            </h3>
          </Link>
        </div>
        <h1 className="h2 fw-bold pb-2">{post.title}</h1>
        <div className="text-muted">
          <div className="d-flex justify-content-between">
            <h2 className="h6 fw-light">
              Di{" "}
              <Link to={`/author/${post.author.node.slug}`}>
                <b>{post.author.node.name}</b>
              </Link>{" "}
              | {date}
            </h2>
            <span>
              {post.comments.nodes.length} <CommentIcon />
            </span>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="d-flex justify-content-between pt-2">
            <span>
              {post.tags.nodes.map((tag: WpTag, i: number) => (
                <React.Fragment key={i}>
                  <Badge name={tag.name} slug={tag.slug} />
                </React.Fragment>
              ))}
            </span>
            <span>{getReadingTime(post.content)} min</span>
          </div>
        </div>

        <div
          className="pt-5 pb-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        ...Post
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: AUTO
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  }
`;
