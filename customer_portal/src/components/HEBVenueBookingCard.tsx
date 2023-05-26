import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_AVAILABLE_BOOKING_LISTING } from "@/data/listings";
import { HEBVenueBookingDataType } from "@/data/types";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";

export interface HEBVenueBookingCardProps {
  className?: string;
  ratioClass?: string;
  data?: HEBVenueBookingDataType;
  size?: "default" | "small";
}

const DEMO_DATA: HEBVenueBookingDataType = DEMO_AVAILABLE_BOOKING_LISTING[0];

const HEBVenueBookingCard: FC<HEBVenueBookingCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  ratioClass = "aspect-w-3 aspect-h-3",
}) => {
  const {
    galleryImgs,
    templeAbrev,
    address,
    venueName,
    href,
    availableDates,
    id,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden ">
        <GallerySlider
          uniqueID={`VenueBookingCard_${id}`}
          ratioClass={ratioClass}
          galleryImgs={galleryImgs}
          href={href}
        />
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "py-4 space-y-3" : "p-3 space-y-1"}>
        <div className="space-y-2">
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            {size === "default" && <MapPinIcon className="w-4 h-4" />}
            <span className="">{address}, {templeAbrev}</span>
          </div>
          <div className="flex items-center space-x-2">
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">Location: {venueName}</span>
              <span className="line-clamp-1">Available on: {availableDates.toString().replace(",", ", ")}</span>
            </h2>
          </div>
        </div>
        <div className="border-b border-neutral-100 dark:border-neutral-800"></div>
      </div>
    );
  };

  return (
    <div className={`nc-ExperiencesCard group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={href}>{renderContent()}</Link>
    </div>
  );
};

export default HEBVenueBookingCard;
