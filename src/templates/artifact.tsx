import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@components";

export default function Artifact({ data }: { data: any }) {
  const artifact = data.allArtifacts.nodes[0];

  const goBack = () => {
    if (typeof window !== "undefined") window.history.back();
  };

  return (
    <Layout title={artifact.title}>
      <div className="container mb-5">
        <pre>{JSON.stringify(artifact, null, 2)}</pre>
        <button className="btn w-25 border" onClick={goBack}>
          &lt;
        </button>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ($name: String!) {
    allArtifacts(filter: { name: { eq: $name } }) {
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
        created
        edited
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
