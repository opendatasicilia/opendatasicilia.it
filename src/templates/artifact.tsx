import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@components";
import { ArtifactType } from "@types";
import {
  ApiDetail,
  ChartDetail,
  DashboardDetail,
  DatasetDetail,
  MapDetail,
  ProjectDetail,
  SiteDetail,
  TableDetail,
} from "../components/Artifacts/partials/Artifact/ArtifactDetail";

export default function Artifact({ data }: { data: any }) {
  const artifact = data.allArtifacts.nodes[0];

  const goBack = () => {
    if (typeof window !== "undefined") window.history.back();
  };

  const renderComponent = (type: ArtifactType["type"]) => {
    switch (type) {
      case "project":
        return <ProjectDetail artifact={artifact} />;
      case "dataset":
        return <DatasetDetail artifact={artifact} />;
      case "site":
        return <SiteDetail artifact={artifact} />;
      case "api":
        return <ApiDetail artifact={artifact} />;
      case "chart":
        return <ChartDetail artifact={artifact} />;
      case "map":
        return <MapDetail artifact={artifact} />;
      case "table":
        return <TableDetail artifact={artifact} />;
      case "dashboard":
        return <DashboardDetail artifact={artifact} />;
      default:
        return <div></div>;
    }
  };

  const BackBtn = () => (
    <div className="btn border" onClick={goBack}>
      &lt;
    </div>
  );

  return (
    <Layout title={artifact.title}>
      <div className="container mb-5">
        <BackBtn />
        {renderComponent(artifact.type)}
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
