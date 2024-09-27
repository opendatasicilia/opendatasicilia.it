import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@components";

export default function Artifact({ data }: { data: any }) {
  const artifact = data.allArtifacts.nodes[0];

  return (
    <Layout title={artifact.title}>
      <div className="container mb-5">
        <pre>{JSON.stringify(artifact, null, 2)}</pre>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ($name: String!) {
    allArtifacts(filter: { name: { eq: $name } }) {
      nodes {
        name
      }
    }
  }
`;
