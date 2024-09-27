import React, { useEffect } from "react";
import Masonry from "masonry-layout";

import { ArtifactType } from "@types";
import { Artifact } from "./partials/Artifact";

type ArtifactProps = {
  artifacts: ArtifactType[];
};
export const Artifacts = ({ artifacts }: ArtifactProps) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const grid = document.querySelector(".row");
    if (grid) {
      new Masonry(grid, {
        percentPosition: true,
        itemSelector: ".col-lg-4",
      });
    }
  }, [artifacts]);

  return (
    <div className="row">
      {artifacts.map((artifact, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <div className="card p-3">
            <Artifact artifact={artifact} />
          </div>
        </div>
      ))}
    </div>
  );
};
