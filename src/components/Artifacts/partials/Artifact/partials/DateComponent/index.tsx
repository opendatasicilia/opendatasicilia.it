import React from "react";

import {
  IoCalendarNumberOutline as CalendarIcon,
  IoPencil as PencilIcon,
} from "react-icons/io5";

interface DateComponentProps {
  date: string;
  type: string;
}

export const DateComponent = ({ date, type }: DateComponentProps) => {
  const Icon = ({ className }: { className: string }) =>
    type === "created" ? (
      <CalendarIcon className={className} />
    ) : (
      <PencilIcon className={className} />
    );

  const convertDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className="d-flex align-items-center ms-2 bg-gray badge">
      <Icon className="me-1 text-black" />
      <small className="text-muted">{convertDate(date)}</small>
    </div>
  );
};
