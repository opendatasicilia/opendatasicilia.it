import React, { useEffect, useState } from "react";
import { ArtifactType } from "@types";
import { ArtifactCard } from "./partials/Artifact";
import { IS_BROWSER } from "@utils/helpers";

type ArtifactProps = {
  artifacts: ArtifactType[];
};

export const Artifacts = ({ artifacts }: ArtifactProps) => {
  const [Masonry, setMasonry] = useState<any>(null);

  useEffect(() => {
    if (IS_BROWSER) {
      import("masonry-layout").then((MasonryModule) => {
        setMasonry(() => MasonryModule.default || MasonryModule);
      });
    }
  }, []);

  useEffect(() => {
    if (Masonry && IS_BROWSER) {
      const grid = document.querySelector(".row");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".col-lg-4",
          percentPosition: true,
        });
      }
    }
  }, [Masonry, artifacts]);

  return (
    <div className="row">
      {artifacts.map((artifact, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <div className="card p-3">
            <ArtifactCard artifact={artifact} />
          </div>
        </div>
      ))}
    </div>
  );
};
