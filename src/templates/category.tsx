import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Blog } from "../components/Blog";

export default function Category({ data, pageContext }: TemplateProps) {
  const posts = data.allWpPost.nodes;
  return (
    <Layout>
      <div className="container">
        <h1>Categoria: {pageContext.name}</h1>
        <Blog data={posts} />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
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
