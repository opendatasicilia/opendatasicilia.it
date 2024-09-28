import React from "react";
import { ArtifactType } from "@types";

export const DashboardDetail = ({ artifact }: { artifact: ArtifactType }) => {
  return (
    <>
      <h1>{artifact.title}</h1>
      <p>{artifact.description}</p>
    </>
  );
};
