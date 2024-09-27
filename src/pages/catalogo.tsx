import React from "react";
import { graphql } from "gatsby";
import { Artifacts, Layout } from "@components";
import { AllArtifacts } from "@types";

export default function CatalogoPage({ data }: { data: AllArtifacts }) {
  const artifacts = data.allArtifacts.nodes;
  return (
    <Layout title="Catalogo">
      <div className="container">
        <h1 className="fw-bold mb-3">Catalogo</h1>
        <Artifacts artifacts={artifacts} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allArtifacts {
      nodes {
        name
        title
        description
        type
        url
        iframe
        resource {
          name
          position
        }
        has_header
        # thumbnail
        tools
        created(formatString: "DD/MM/YYYY")
        edited(formatString: "DD/MM/YYYY")
        status
        source {
          title
          url
        }
        data {
          dataset
          file
        }
        blog_post_url
        linked_to_artifacts
        contributors
        repository
      }
    }
  }
`;
