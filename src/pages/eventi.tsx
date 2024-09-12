import React from "react";
import { graphql } from "gatsby";
import { Layout, Blog } from "@components";
import { AllWpPostData } from "@types";

export default function Eventi({ data }: { data: AllWpPostData }) {
  const title = "Eventi";
  const posts = data.allWpPost.nodes;
  return (
    <Layout title={title}>
      <div className="container">
        <h1 className="fw-bold">{title}</h1>
        <Blog posts={posts} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "eventi" } } } }
      }
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
