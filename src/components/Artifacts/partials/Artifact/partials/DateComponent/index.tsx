import React from "react";

import { format } from "date-fns";
import { it } from "date-fns/locale";

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
    return isNaN(dateObj.getTime())
      ? "Invalid date"
      : format(dateObj, "dd/MM/yyyy", { locale: it });
  };

  return (
    <div className="d-flex align-items-center ms-2 bg-gray badge">
      <Icon className="me-1 text-black" />
      <small className="text-muted">{convertDate(date)}</small>
    </div>
  );
};
