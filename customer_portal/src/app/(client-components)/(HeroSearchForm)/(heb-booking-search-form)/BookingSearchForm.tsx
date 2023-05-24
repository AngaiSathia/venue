import React, { FC } from "react";
import PurposeInput from "../PurposeInput";
import GuestsInput from "../GuestsInput";
import StayDatesRangeInput from "./FacilityDatesRangeInput";

const BookingSearchForm: FC<{}> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <PurposeInput className="flex-[1.5]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <StayDatesRangeInput className="flex-1" />
      </form>
    );
  };

  return renderForm();
};

export default BookingSearchForm;
