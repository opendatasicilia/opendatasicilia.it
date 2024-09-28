import React from "react";

import Dataset from "@assets/icons/artifacts/dataset_icon.svg";
import Map from "@assets/icons/artifacts/map_icon.svg";
import Project from "@assets/icons/artifacts/project_icon.svg";
import Table from "@assets/icons/artifacts/table_icon.svg";

export const ProjectIcon = ({ type }: { type: string }) => {
  const icons: { [key: string]: string } = {
    dataset: Dataset,
    map: Map,
    project: Project,
    table: Table,
  };

  const iconSrc = icons[type] || Project;

  return (
    <div className="bg-gray h-auto p-2 rounded">
      <img src={iconSrc} alt={`${type} icon`} />
    </div>
  );
};
