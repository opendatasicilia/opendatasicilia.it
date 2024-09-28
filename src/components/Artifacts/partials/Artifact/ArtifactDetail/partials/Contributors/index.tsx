import React from "react";
import { ArtifactType } from "@types";

import contribIcon from "@assets/icons/artifacts/contributors.svg";

interface ContributorsProps {
  contributors: ArtifactType["contributors"];
}

export const Contributors = ({ contributors }: ContributorsProps) => {
  return (
    <div className="mt-3">
      <div className="d-flex align-items-center">
        <img
          className="me-2 align-self-center"
          src={contribIcon}
          alt="Contributors"
          style={{ height: "24px" }}
        />
        <h3 className="text-uppercase align-self-center d-flex">
          Contributors
        </h3>
      </div>
      <p>
        Hanno contribuito:{" "}
        {contributors.filter((author: any) => author).join(", ")}
      </p>
    </div>
  );
};
