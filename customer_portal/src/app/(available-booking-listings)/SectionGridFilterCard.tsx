import React, { FC, useState } from "react";
import { DEMO_AVAILABLE_BOOKING_LISTING } from "@/data/listings";
import { HEBVenueBookingDataType } from "@/data/types";
import HEBPagination from "@/shared/HEBPagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import HEBVenueBookingCard from "@/components/HEBVenueBookingCard";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: HEBVenueBookingDataType[];
  purpose?: string;
  availableDates?: string;
}

const DEMO_DATA: HEBVenueBookingDataType[] = DEMO_AVAILABLE_BOOKING_LISTING;

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
  purpose = "",
  availableDates = ""
}) => {
  const [templeFilter, setTempleFilter] = useState<string[]>([]);
  const [availableDateDropdown] = useState<{name: string}[]>(
    availableDates.split(",").map((item) => {
      return {
        name: new Date(item).toDateString()
      }
    })
  );
  const[availableDateFilter, setAvailableDateFilter] = useState<string[]>([]);
  
  const changeTempleFilter = (filters: string[]) => {
    setCurrentPage(1);
    setTempleFilter(filters);
  };

  const changeDateFilter = (filters: string[]) => {
    setCurrentPage(1);
    setAvailableDateFilter(filters);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);

  const filterData = () => {
    return data
      .filter(item => templeFilter.length === 0 
        ? true : templeFilter.includes(item.temple))
      .filter(item => availableDateFilter.length === 0
        ? true : availableDateFilter.some(i => item.availableDates.includes(i)));
  }
  
  // get current records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const paginatedData = () => {
    return filterData().slice(indexOfFirstRecord, indexOfLastRecord);
  }

  // change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  };

  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading="Venues Available"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-4">
            {purpose}
            <span className="mx-2">·</span>
            {data.length} results found
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters setReturnTempleFilter={changeTempleFilter} dynamicAvailableDates={availableDateDropdown} setReturnAvailableDatesFilter={changeDateFilter}/>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {paginatedData()
          .map((venue) => (
            <HEBVenueBookingCard key={venue.id} data={venue} />
          ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <HEBPagination recordPerPage={recordsPerPage} totalRecords={filterData().length} paginate={paginate} currentPage={currentPage}/>
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
