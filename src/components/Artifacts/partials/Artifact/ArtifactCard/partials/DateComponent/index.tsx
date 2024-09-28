import React from "react";

import created_icon from "@assets/icons/artifacts/created_icon.svg";
import edited_icon from "@assets/icons/artifacts/edited_icon.svg";

interface DateComponentProps {
  date: string;
  type: string;
}

export const DateComponent = ({ date, type }: DateComponentProps) => {
  const Icon = ({ className }: { className: string }) =>
    type === "created" ? (
      <img src={created_icon} alt="created" className={className} />
    ) : (
      <img src={edited_icon} alt="edited" className={className} />
    );
  return (
    <div className="d-flex align-items-center ms-2 bg-gray badge">
      <Icon className="me-1 text-black icon" />
      <small className="text-muted">{date}</small>
    </div>
  );
};
