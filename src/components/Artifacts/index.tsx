import React from "react";

import { ArtifactType } from "@types";
import { Artifact } from "./partials/Artifact";

type ArtifactProps = {
  artifacts: ArtifactType[];
};

export const Artifacts = ({ artifacts }: ArtifactProps) => (
  <div className="row" data-masonry='{"percentPosition": true }'>
    {artifacts.map((artifact, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
        <div className="card p-3">
          <Artifact artifact={artifact} />
        </div>
      </div>
    ))}
  </div>
);
