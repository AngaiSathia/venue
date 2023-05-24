"use client";

import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "./ClearDataButton";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface DropdownItem {
  name: string;
  description: string;
  active?: boolean;
}

const purposeDropdown: DropdownItem[] = [
  {
    name: "Wedding",
    description: "Arrangement for wedding"
  },
  {
    name: "Other Purpose",
    description: "Arrangement for seminars, meeting groups, gathering events"
  },
];

export interface PurposeInputProps {
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
}

const PurposeInput: FC<PurposeInputProps> = ({
  autoFocus = false,
  desc = "What are you booking the facility for?",
  className = "nc-flex-1.5",
  divHideVerticalLineClass = "left-10 -right-0.5",
}) => {
  const [purposeInputValue, setPurposeInputValue] = useState("Purpose");

  const handleSelectPurpose = (purposeValue: string) => {
    setPurposeInputValue(purposeValue);
  };
  return (
    <Popover className={`flex relative ${className}`}>
          {({ open }) => (
            <>
              <div
                className={`flex-1 z-10 flex items-center focus:outline-none ${
                  open ? "nc-hero-field-focused" : ""
                }`}
              >
                <Popover.Button
                  className={`relative z-10 flex-1 flex text-left items-center nc-hero-field-padding space-x-3 focus:outline-none`}
                  >
                  <ChevronDownIcon
                    className={`${open ? "-rotate-180" : "text-opacity-70 "}
                      ml-2 h-7 w-7 text-neutral-700 group-hover:text-opacity-80 transition ease-in-out duration-150 `}
                    aria-hidden="true"
                  />
                  <div className="flex-grow">
                    <span className="block xl:text-lg font-semibold">
                      {purposeInputValue}
                    </span>
                    <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                      {desc}
                    </span>
                  </div>
                  
                  {open && (
                    <ClearDataButton
                      onClick={() => {
                        setPurposeInputValue("Purpose");
                      }}
                    />
                  )}
                </Popover.Button>
              </div>

              {open && (
                <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -left-0.5 right-0 bg-white dark:bg-neutral-800"></div>
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
                <Popover.Panel className="absolute left-0 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white dark:bg-neutral-800 top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
                  <div className="relative flex flex-col px-5 space-y-5">
                      {purposeDropdown.map((item, index) => (                        
                        <div
                          key={index}
                          onClick={() => handleSelectPurpose(item.name)}
                          className={`flex items-center p-4 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                            item.active ? "bg-neutral-100 dark:bg-neutral-700" : ""
                          }`}>
                          <label>
                            <span className=" text-neutral-900 dark:text-neutral-100">
                              {item.name}
                            </span>
                            <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
                              {item.description}
                            </p>
                          </label>
                        </div>
                      ))}
                    </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
  );
};

export default PurposeInput;
