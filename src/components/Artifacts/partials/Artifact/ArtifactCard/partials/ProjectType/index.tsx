import React from "react";
import { getColor } from "./utils";

export const ProjectType = ({ type }: { type: string }) => {
  const color = getColor(type);
  return (
    <div>
      <span className={`badge ${color} text-light text-capitalize p-2`}>
        {type}
      </span>
    </div>
  );
};
