import React from "react";
import { getColor } from "./utils";
import { ArtifactType } from "@types";

interface ProjectTypeLabelProps {
  type: ArtifactType["type"];
  size?: string;
}

export const ProjectTypeLabel = ({ type, size }: ProjectTypeLabelProps) => {
  const color = getColor(type);
  const minWidth = size === "lg" ? "86px" : "auto";
  return (
    <div>
      <span
        style={{ minWidth }}
        className={`badge ${color} text-light text-capitalize p-2`}
      >
        {type}
      </span>
    </div>
  );
};
