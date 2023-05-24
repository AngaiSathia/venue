import React, { FC } from "react";

interface Props {
  dayOfMonth: number;
  date?: Date | undefined;
}

const DatePickerCustomDay: FC<Props> = ({ dayOfMonth, date }) => {
  return <span className="react-datepicker__day_span bg-orange-500">{dayOfMonth}</span>;
};

export default DatePickerCustomDay;
