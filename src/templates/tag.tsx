import React from "react";
import { graphql } from "gatsby";
import { Layout, Blog } from "@components";
import { TemplateProps } from "@types";

export default function Category({ data, pageContext }: TemplateProps) {
  const posts = data.allWpPost.nodes;

  return (
    <Layout>
      <div className="container">
        <h1>Tag: {pageContext.name}</h1>
        <Blog data={posts} />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
      nodes {
        ...Post
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: DOMINANT_COLOR
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
  }
`;
