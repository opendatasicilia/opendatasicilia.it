import React from "react";
import { graphql } from "gatsby";
import { Layout, Blog } from "@components";
import { AllWpPostData } from "@types";

export default function BlogPage({ data }: { data: AllWpPostData }) {
  const posts = data.allWpPost.nodes;
  return (
    <Layout title="Blog">
      <div className="container">
        <h1 className="fw-bold">Tutti i post</h1>
        <Blog data={posts} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allWpPost {
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
