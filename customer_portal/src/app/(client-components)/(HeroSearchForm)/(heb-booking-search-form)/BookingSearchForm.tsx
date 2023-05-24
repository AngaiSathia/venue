import React, { FC } from "react";
import PurposeInput from "../PurposeInput";
import FacilityDatesMultiSelect from "./FacilityDatesMultiSelect";

const BookingSearchForm: FC<{}> = ({}) => {
  const [purposeInputState, setPurposeInputState] = React.useState("Wedding Package");
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <PurposeInput className="flex-[1]" purposeInputState={purposeInputState} setPurposeInputState={setPurposeInputState} />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <FacilityDatesMultiSelect className="flex-1" purposeInputValue={purposeInputState}/>
      </form>
    );
  };

  return renderForm();
};

export default BookingSearchForm;
