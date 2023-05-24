"use client";

import React, { FC } from "react";
import useBookingStore from "@/app/store/bookingSlice";

export interface PageHelloProps {}

const PageHello: FC<PageHelloProps> = ({}) => {
  const bookings = useBookingStore((state) => state.bookings);

  return (
    <>
      <h1>Your Bookings Info {bookings.length}</h1>
      {bookings.map((booking) => (
        <li key={booking.id}>
          {booking.bookdate.toString()} {booking.am_avail.valueOf()} {booking.pm_avail.valueOf()}
        </li>
      ))}
    </>
  );
};

export default PageHello;
