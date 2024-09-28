import { Link } from "gatsby";
import React from "react";

interface BadgeProps {
  name: string;
  slug: string;
}

export const Badge = ({ name, slug }: BadgeProps) => {
  return (
    <div
      className="d-inline rounded-4 me-2"
      style={{
        padding: "5px 15px 5px 15px",
        backgroundColor: "#f6f3d4",
      }}
    >
      <Link style={{ color: "black" }} to={`/tag/${slug}`}>
        {name}
      </Link>
    </div>
  );
};
