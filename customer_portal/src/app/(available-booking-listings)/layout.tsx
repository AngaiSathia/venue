"use client";

import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import MobileFooterSticky from "../(listing-detail)/(components)/MobileFooterSticky";
import { imageGallery as listingWeddingImageGallery } from "./list-available-booking/wedding-package/constant";
import { imageGallery as listingReligiousLecturesImageGallery } from "./list-available-booking/religious-lectures/constant";
import { imageGallery as listingFunctionRoomImageGallery } from "./list-available-booking/function-room/constant";
import { imageGallery as listingDiningHallImageGallery } from "./list-available-booking/dining-hall/constant";
import { Route } from "next";

const ListingLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const getImageGalleryListing = () => {
    if (thisPathname.includes("/wedding-package")) {
      return listingWeddingImageGallery;
    }
    if (thisPathname.includes("/religious-lectures")) {
      return listingReligiousLecturesImageGallery;
    }
    if (thisPathname.includes("/function-room")) {
      return listingFunctionRoomImageGallery;
    }
    if (thisPathname.includes("/dining-hall")) {
      return listingDiningHallImageGallery;
    }
    return [];
  };

  return (
    <div className="ListingDetailPage">
      <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      />

      <div className="container ListingDetailPage__content mb-24">{children}</div>


      {/* STICKY FOOTER MOBILE */}
      <MobileFooterSticky />
    </div>
  );
};

export default ListingLayout;
