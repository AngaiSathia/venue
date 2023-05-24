"use client";

import React, { Fragment, useState, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { PathName } from "@/routers/types";
import DatePicker, { DateObject, Calendar } from "react-multi-date-picker";
import ClearDataButton from "../ClearDataButton";
import ButtonSubmit from "../ButtonSubmit";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "./styles/purple.css"
import "./styles/layout.css"

export interface FacilityDatesMultiSelectProps {
  className?: string;
  fieldClassName?: string;
  buttonSubmitHref?: PathName;
  hasButtonSubmit?: boolean;
  purposeInputValue: string;
}

const FacilityDatesMultiSelect: FC<FacilityDatesMultiSelectProps> = ({
  className = "[ lg:nc-flex-2 ]",
  fieldClassName = "[ nc-hero-field-padding ]",
  buttonSubmitHref = "/listing-available-booking-map",
  hasButtonSubmit = true,
  purposeInputValue
}) => {
  const today = new Date();
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  
  const [values, setValues] = useState<[]>([])

  const [selectedDateList, setSelectedDateList] = useState<DateObject[]>([new DateObject(today)]);

  const [unavailableDateList, setUnavailableDateList] = useState<String[]>([new Date("2023/05/25").toDateString(), new Date("2023/05/29").toDateString()]);

  // const onChangeDate = (dateSelected: DateObject[]) => {
  //   let date = dateSelected[0].toDate();
  //   var dateIndex = selectedDateList.indexOf(date);
  //   dateIndex === -1 ? selectedDateList.push(date) : selectedDateList.splice(dateIndex, 1);
  // };
  const onChangeDate = (dateSelected: DateObject[]) => {
    setSelectedDateList(dateSelected);
  }

  const clearSelectedDateList = () => {
    setSelectedDateList([]);
  }

  const renderInput = () => {
    return (
      <>
        <div className="text-neutral-300 dark:text-neutral-400">
          <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </div>
        <div className="flex-grow text-left">
          <span className="block xl:text-lg font-semibold">
            List Of Dates
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {"Multi-select booking dates interested"}
          </span>
        </div>
      </>
    );
  };

  return (
    <Popover className={`FacilityDatesMultiSelect z-10 relative flex ${className}`}>
      {({ open }) => (
        <>
        
          <Popover.Button
            className={`flex-1 z-10 flex relative ${fieldClassName} items-center space-x-3 focus:outline-none ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            {renderInput()}
            {selectedDateList.length > 0 && open && (
              <ClearDataButton onClick={() => clearSelectedDateList()} />
            )}
          </Popover.Button>

          {/* BUTTON SUBMIT OF FORM */}
          {hasButtonSubmit && (
            <div className="p-2 xl:p-4">
              <ButtonSubmit href={`${buttonSubmitHref}?purpose=${encodeURIComponent(purposeInputValue)}&selectedDates=${encodeURIComponent(selectedDateList.toString())}`} />
            </div>
          )}

          {open && (
            <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white dark:bg-neutral-800"></div>
          )}

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-3/5 z-20 mt-12 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <Calendar
                className={"overflow-hidden rounded-3xl scale-1.2 shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-8 purple"}
                multiple
                value={selectedDateList}
                onChange={onChangeDate}
                numberOfMonths={2}
                // highlightToday={false}
                mapDays={({ date }) => {
                  if (unavailableDateList.includes(date.toDate().toDateString())) return {
                    disabled: true,
                    style: { color: "#ccc" }
                  }
                }}
                renderButton={(direction: any, handleClick: any, disabled: any) => (
                  <div>
                    {direction === "left" ? 
                      (<button
                          aria-label="Previous Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--previous absolute -top-1 left-0 flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                          }
                          onClick={handleClick}
                          type="button"
                        >
                          <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                            <ChevronLeftIcon className="w-5 h-5" />
                          </span>
                      </button>): 
                      (<button
                          aria-label="Next Month"
                          className="react-datepicker__navigation react-datepicker__navigation--next absolute -top-1 -right-0 flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                          type="button"
                          onClick={handleClick}
                        >
                          <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                            <ChevronRightIcon className="w-5 h-5" />
                          </span>
                      </button>)}
                  </div>
                )}
                weekDays={weekDays}
                minDate={today}   
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default FacilityDatesMultiSelect;

