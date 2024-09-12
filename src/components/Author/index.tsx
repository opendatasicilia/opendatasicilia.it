import React from "react";
import { WpUser } from "@types";

export const Author = ({ user }: { user: WpUser }) => (
  <div className="row text-center text-lg-start">
    <div className="col-12 col-lg-1">
      <img
        className="rounded-circle profile"
        src={user.avatar.url}
        alt={user.name}
      />
    </div>
    <div className="col-12 col-lg-11 pt-3 pt-lg-0">
      <h1>{user.name}</h1>
      <p>{user.description}</p>
    </div>
  </div>
);
