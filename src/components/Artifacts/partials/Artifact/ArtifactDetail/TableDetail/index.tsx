import React from "react";
import { ArtifactType } from "@types";

export const TableDetail = ({ artifact }: { artifact: ArtifactType }) => {
  return (
    <div>
      <h1>{artifact.title}</h1>
      <p>{artifact.description}</p>
    </div>
  );
};
