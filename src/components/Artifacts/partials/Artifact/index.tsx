import React from "react";
import { ArtifactType } from "@types";
import { ProjectType, DateComponent } from "./partials";
import { Link } from "gatsby";

import { ProjectIcon } from "./partials/ProjectIcon";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Artifact = ({ artifact }: { artifact: ArtifactType }) => {
  const href = `/${artifact.type}/${artifact.name}`;

  return (
    <div className="row mb-3">
      <div className="col-auto pe-0">
        <ProjectIcon type={artifact.type} />
      </div>
      <div className="col">
        <h2 className="h4 fw-bold m-0">{artifact.title}</h2>
        <div className="d-flex mt-2">
          <ProjectType type={artifact.type} />
          {artifact.created && (
            <DateComponent date={artifact.created} type="created" />
          )}
          {artifact.edited && (
            <DateComponent date={artifact.edited} type="edited" />
          )}
        </div>
        <div className="mt-3">
          <p>{artifact.description}</p>
        </div>
        <div>
          <Link className="text-dark fw-bold" to={href}>
            <span>Anteprima</span>
          </Link>
          <MdOutlineRemoveRedEye className="ms-1" />
        </div>
        {/* <pre>{JSON.stringify(artifact, null, 2)}</pre> */}
      </div>
    </div>
  );
};
