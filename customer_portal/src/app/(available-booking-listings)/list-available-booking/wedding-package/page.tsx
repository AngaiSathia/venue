"use client";

import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Route } from "next";
import Image from "next/image";
import { PHOTOS } from "./constant";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import SectionGridFilterCard from "../../SectionGridFilterCard";

export interface ListBookingWeddingPageProps {}

const ListBookingWeddingPage: FC<ListBookingWeddingPageProps> = ({}) => {

    const thisPathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedDates = searchParams?.get("selectedDates")?.toString();

    const handleOpenModalImageGallery = () => {
        router.push(`${thisPathname}/?selectedDates=${selectedDates}&modal=PHOTO_TOUR_SCROLLABLE` as Route);
    }

    const renderSection1 = () => {
        return (
            <div className="listingSection__wrap !space-y-8">
                {/* 1 */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                    Wedding Package Information
                </h2>

                {/* 2 */}
                <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
                <div className="text-neutral-6000 dark:text-neutral-300">
                    <span className="mx-5">·</span>
                    <span>Wedding package price: $4,300.00 (excludes priests and musicians).</span><br/>
                    <span className="mx-5">·</span>
                    <span>This package price is not inclusive of a refundable deposit of $1,500.00.</span><br/>
                    <span className="mx-5">·</span>
                    <span>Wedding Hall plus circle seats</span><br/>
                    <span className="mx-5">·</span>
                    <span>Manavarai (excludes accessories)</span><br/>
                    <span className="mx-5">·</span>
                    <span>Changing Rooms</span><br/>
                    <span className="mx-5">·</span>
                    <span>Dining Hall (excludes tables and chairs)</span><br/>
                    <span className="mx-5">·</span>
                    <span>General Stage Lighting</span><br/>
                    <span className="mx-5">·</span>
                    <span>Sound System (includes technician)</span><br/>
                    <span className="mx-5">·</span>
                    <span>TVs (In Dining Hall)</span><br/>
                    <span className="mx-5">·</span>
                    <span>Projector and screen for photo or video montage</span><br/>
                    <span className="mx-5">·</span>
                    <span>20 Complimentary Car Park Coupons (car park availability first-come-first)</span><br/><br/>
                </div>
            </div>
        );
    };

    const renderSection2 = () => {
        return (
            <div className="listingSection_wrap">
                {/* listing */}
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    <SectionGridFilterCard purpose="wedding package" availableDates={selectedDates}/>
                </div>
            </div>
        )
    }

    return (
        <div className="nc-ListBookingWeddingPage">
            {/* HEADER */}
            <header className="rounded-md sm:rounded-xl">
                <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
                    <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                        onClick={handleOpenModalImageGallery}>
                        <Image
                            fill
                            className="object-cover rounded-md sm:rounded-xl"
                            src={PHOTOS[0]}
                            alt=""
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
                        />
                        <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
                    </div>
                    {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
                        <div key={index}
                            className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                                index >= 3? "hidden sm:block" : ""
                            }`}>
                            <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                                <Image
                                    fill
                                    className="object-cover rounded-md sm:rounded-xl"
                                    src={item || ""}
                                    alt=""
                                    sizes="400px"/>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                onClick={handleOpenModalImageGallery}/>
                        </div>
                    ))}

                    <button
                        className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
                        onClick={handleOpenModalImageGallery}>
                        <Squares2X2Icon className="w-5 h-5" />
                        <span className="ml-2 text-neutral-800 text-sm font-medium">
                            Show all photos
                        </span>
                    </button>
                </div>
            </header>

            {/* MAIN */}
            <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
                {/* CONTENT */}
                <div className="w-full lg:w-full xl:w-full space-y-8 lg:space-y-10">
                    {renderSection1()}
                    {renderSection2()}
                </div>
            </main>
        </div>
    )
};

export default ListBookingWeddingPage;