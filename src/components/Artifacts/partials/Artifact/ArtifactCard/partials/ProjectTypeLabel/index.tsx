import React from "react";
import { getColor } from "./utils";
import { ArtifactType } from "@types";

export const ProjectTypeLabel = ({ type }: { type: ArtifactType["type"] }) => {
  const color = getColor(type);
  return (
    <div>
      <span className={`badge ${color} text-light text-capitalize p-2`}>
        {type}
      </span>
    </div>
  );
};
