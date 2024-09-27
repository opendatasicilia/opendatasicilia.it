import React from "react";

import { ArtifactType } from "@types";
import { ProjectType, DateComponent } from "./partials";
import { Link } from "gatsby";

export const Artifact = ({ artifact }: { artifact: ArtifactType }) => {
  const href = `/${artifact.type}/${artifact.name}`;
  return (
    <>
      <h2 className="h3 mb-3">{artifact.title}</h2>
      <div className="d-flex">
        <ProjectType type={artifact.type} />
        {artifact.created && (
          <DateComponent date={artifact.created} type="created" />
        )}
        {artifact.edited && (
          <DateComponent date={artifact.edited} type="edited" />
        )}
      </div>
      <div className="mt-3">
        <p>{artifact.description}</p>
      </div>
      {/* <pre>{JSON.stringify(artifact, null, 2)}</pre> */}
      <div>
        <Link to={href}>Dettagli</Link>
      </div>
    </>
  );
};
