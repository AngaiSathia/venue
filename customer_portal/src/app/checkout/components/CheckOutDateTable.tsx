"use client";

import { TableCaption, TableContainer, Tr } from "@chakra-ui/table";
import useBookingStore from "@/app/store/bookingSlice";
import React, { useEffect, useState } from "react";
import { Booking } from "@/app/store/models/booking";
import { Checkbox } from "@chakra-ui/react";

interface bookingInfo {
  booking: Booking;
  description: string;
}

const CheckOutDateRow = () => {
  const selecteddates = useBookingStore((state) => state.bookings);
  const eventType = useBookingStore((state) => state.eventType);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [numOfDates, setNumOfDates] = useState(0);
  const [maxDates, setMaxDates] = useState(0);
  const [bookingsInfo, setBookingsInfo] = useState<bookingInfo[]>([]);

  const updateSelectedDates = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    if (checkedState.filter((i) => i).length >= maxDates && e.target.checked) {
      alert(
        "You have reached maximum number of booking slots selection allowed"
      );
      return;
    }

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const setEventMaxBookings = () => {
    switch (eventType) {
      case "Wedding":
        setMaxDates(2);
        break;

      default:
        setMaxDates(1);
    }
  };

  useEffect(() => {
    setEventMaxBookings();
  }, []);

  useEffect(() => {
    let bookings: bookingInfo[] = [];
    let checkedStates: boolean[] = [];

    let sortedSelectedDates = selecteddates.sort((booking1, booking2) =>
      booking1.bookdate > booking2.bookdate ? 1 : -1
    );

    sortedSelectedDates.map((booking) => {
      booking.am_avail &&
        bookings.push({ booking, description: "0800 to 1230 hrs" }) &&
        checkedStates.push(false);
      booking.pm_avail &&
        bookings.push({ booking, description: "1230 to 1800 hrs" }) &&
        checkedStates.push(false);
    });
    setCheckedState(checkedStates);
    setBookingsInfo(bookings);
    console.log(checkedState);
  }, []);
  const renderDateRow = () => {
    return (
      <TableContainer>
        <TableCaption>Select your preferred sessions</TableCaption>
        {bookingsInfo.map((booking, index) => {
          return (
            <Tr>
              <Checkbox
                key={booking.booking.id + index}
                id={`checkbox-${index}`}
                onChange={(e) => updateSelectedDates(e, index)}
                isChecked={checkedState[index]}
              >
                {booking.booking.bookdate} {booking.description}
              </Checkbox>
            </Tr>
          );
        })}
      </TableContainer>
    );
  };

  return renderDateRow();
};

export default CheckOutDateRow;
