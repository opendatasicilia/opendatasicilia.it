import React from "react";

import { ArtifactType } from "@types";
import { ProjectType } from "./partials/ProjectType";
import { Link } from "gatsby";

export const Artifact = ({ artifact }: { artifact: ArtifactType }) => {
  return (
    <Link to={`/${artifact.type}/${artifact.name}`}>
      <h2>{artifact.title}</h2>
      <ProjectType type={artifact.type} />
      <pre>{JSON.stringify(artifact, null, 2)}</pre>
    </Link>
  );
};
