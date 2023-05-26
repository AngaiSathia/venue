import React, { FC, useState } from "react";
import { DEMO_AVAILABLE_BOOKING_LISTING } from "@/data/listings";
import { HEBVenueBookingDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import HEBVenueBookingCard from "@/components/HEBVenueBookingCard";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: HEBVenueBookingDataType[];
  numberOfResults?: number;
  purpose?: string;
  availableDates?: string;
}

const DEMO_DATA: HEBVenueBookingDataType[] = DEMO_AVAILABLE_BOOKING_LISTING.filter(
  (_, i) => i < 9
);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
  numberOfResults = 0,
  purpose = "",
  availableDates = ""
}) => {
  const [templeFilter, setTempleFilter] = useState<string[]>([]);
  const [availableDateList, setAvailableDateList] = useState<{name: string}[]>(
    availableDates.split(",").map((item) => {
      return {
        name: new Date(item).toDateString()
      }
    })
  );
  const[availableDateFilter, setAvailableDateFilter] = useState<string[]>([]);
  
  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading="Venues Available"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            {purpose}
            <span className="mx-2">·</span>
            {numberOfResults} results found
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters setReturnTempleFilter={setTempleFilter} dynamicAvailableDates={availableDateList} setReturnAvailableDatesFilter={setAvailableDateFilter}/>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {data.filter(item => templeFilter.length === 0 
          ? true : templeFilter.includes(item.temple))
          .filter(item => availableDateFilter.length === 0
            ? true : availableDateFilter.some(i => item.availableDates.includes(i)))
            .map((venue) => (
              <HEBVenueBookingCard key={venue.id} data={venue} />
            ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
