"use client";

import useBookingStore from "@/app/store/bookingSlice";
import React, { FC, useEffect, useState } from "react";
import { Booking } from "@/app/store/models/booking";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  SimpleGrid,
  Spacer,
  Stack,
} from "@chakra-ui/react";

interface bookingInfo {
  booking: Booking;
  timing: string;
  am_pm: string;
}

const CheckOutDateTable = () => {
  const selecteddates = useBookingStore((state) => state.bookings);
  const confirmedDates = useBookingStore((state) => state.confirmedDates);
  const addConfirmedDate = useBookingStore((state) => state.addConfirmedDate);
  const removeConfirmedDate = useBookingStore(
    (state) => state.removeConfirmedDate
  );
  const eventType = useBookingStore((state) => state.eventType);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [numOfDates, setNumOfDates] = useState(0);
  const [maxDates, setMaxDates] = useState(0);
  const [bookingsInfo, setBookingsInfo] = useState<bookingInfo[]>([]);

  const updateConfirmedDates = (
    date: string,
    am_pm: string,
    timing: string
  ) => {
    const dateExists = confirmedDates.some((confirmedDate) => {
      return confirmedDate.date === date && confirmedDate.timing === timing
        ? true
        : false;
    });

    dateExists
      ? console.log(`${date} ${am_pm} ${timing} exists`)
      : console.log(`${date} ${am_pm} ${timing} does not exist`);

    dateExists
      ? removeConfirmedDate(date, am_pm, timing)
      : addConfirmedDate(date, am_pm, timing);
  };
  const updateSelectedDates = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number,
    booking: bookingInfo
  ) => {
    if (checkedState.filter((i) => i).length >= maxDates && e.target.checked) {
      alert(
        "You have reached maximum number of booking slots selection allowed"
      );
      return;
    }

    updateConfirmedDates(
      booking.booking.bookdate,
      booking.am_pm,
      booking.timing
    );

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
        bookings.push({
          booking,
          timing: "0800 to 1230 hrs",
          am_pm: "AM",
        }) &&
        checkedStates.push(false);
      booking.pm_avail &&
        bookings.push({
          booking,
          timing: "1230 to 1800 hrs",
          am_pm: "PM",
        }) &&
        checkedStates.push(false);
    });
    setCheckedState(checkedStates);
    setBookingsInfo(bookings);
    console.log(checkedState);
  }, []);

  const renderDateTable = () => {
    return (
      <>
        <Stack align="center">
          <SimpleGrid
            columns={1}
            textTransform="uppercase"
            color={"gray.500"}
            fontSize="md"
            fontWeight="hairline"
          >
            <span>
              {bookingsInfo.length > 1
                ? "Available Sessions"
                : "Available Session"}
            </span>
          </SimpleGrid>
          {bookingsInfo.map((booking, index) => {
            return (
              <SimpleGrid
                key={"grid-" + booking.booking.id + index}
                id={"grid-" + booking.booking.id}
                columns={1}
                spacing={20}
                textTransform="uppercase"
                fontSize="md"
                fontWeight="hairline"
                p="10px"
                bg={index % 2 ? "blue.300" : "orange.300"}
                w={{ base: "250px", md: "350px" }}
                _hover={{ bg: "red.300" }}
              >
                <Flex justify="center" gap="20px">
                  <Flex
                    justify="center"
                    gap="10px"
                    direction={{ base: "column", md: "row" }}
                  >
                    <span>{booking.booking.bookdate}</span>
                    <span>{booking.timing}</span>
                  </Flex>
                  <Checkbox
                    key={"checkbox-" + booking.booking.id + index}
                    onChange={(e) => updateSelectedDates(e, index, booking)}
                    isChecked={checkedState[index]}
                  ></Checkbox>
                </Flex>
              </SimpleGrid>
            );
          })}
        </Stack>
      </>
    );
  };

  return renderDateTable();
};

export default CheckOutDateTable;
