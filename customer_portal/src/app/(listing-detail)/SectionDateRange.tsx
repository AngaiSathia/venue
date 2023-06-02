"use client";

import React, { FC, Fragment, use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import bookingSlice from "@/app/store/bookingSlice";
import useBookingStore from "@/app/store/bookingSlice";
import { state } from "sucrase/dist/types/parser/traverser/base";
import { compileString } from "sass";
import * as process from "process";

//import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
//import DatePickerCustomDay from "@/components/DatePickerCustomDay";

/*const colors = {
  green: [2, 10, 17].map(toDateObject),
  blue: [5, 6, 14].map(toDateObject),
  red: [13, 19, 25].map(toDateObject),
  yellow: [15, 22, 28].map(toDateObject),
};

Object.keys(colors).forEach((color) => {
  colors[color].forEach((date, index) => {
    colors[color][index].color = color;
    colors[color][index].session = "AM";
    //console.log(colors[color][index]);
  });
});

const initialProps = {
  value: [...colors.green, ...colors.blue, ...colors.red, ...colors.yellow],
};*/

export interface Booking {
  id: number;
  venue: string;
  date: string;
  year: string;
  month: string;
  max_sessions: number;
  am_sessions: number;
  pm_sessions: number;
}

const SectionDateRange = () => {
  /*const [startDate, setStartDate] = useState<Date | null>(
    new Date()
  );
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChangeDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };*/

  const [props, setProps] = useState<Booking[]>([]);
  const [month, setMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  const [year, setYear] = useState(new Date().getUTCFullYear().toString());
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const addBooking = useBookingStore((state) => state.addBooking);
  const removeBooking = useBookingStore((state) => state.removeBooking);
  const updateEventType = useBookingStore((state) => state.updateEventType);
  const bookings = useBookingStore((state) => state.bookings);

  const pathname = usePathname();

  const toDateObject = (data: Booking) => {
    return {
      date: new DateObject(data.date),
      max_sessions: data.max_sessions,
      am_open_sessions: data.max_sessions * 0.5 - data.am_sessions,
      pm_open_sessions: data.max_sessions * 0.5 - data.pm_sessions,
      isdateopen:
        data.max_sessions - (data.am_sessions + data.pm_sessions) > 0
          ? true
          : false,
    };
  };

  const parsedExistingBookings = bookings.map((booking) => {
    return booking.bookdate;
  });

  const updateMonth = (date: DateObject) => {
    //console.log("Passed in month " + date);
    const new_date = new DateObject(date);
    const month = new_date
      .toDate()
      .toLocaleString("default", { month: "long" });
    const year = new_date.toDate().getUTCFullYear().toString();
    setMonth(month);
    setYear(year);
  };

  const updateYear = (date: DateObject) => {
    //console.log("Passed in year " + date);
    const year = new DateObject(date).toDate().getUTCFullYear().toString();
    setYear(year);
  };

  const updateBookings = (focusdate: DateObject, clickdate: DateObject) => {
    let isUpdated = false;
    let amIsOpen = true;
    let pmIsOpen = true;
    let matchInParsedDate = false;

    console.log("size of bookings store " + bookings.length);
    if (bookings.length) {
      bookings.forEach((booking) => {
        console.log("booking info " + booking.bookdate);
        console.log("booking id " + booking.id);
        console.log("Object type " + typeof booking.bookdate);
      });
    }

    if (clickdate === undefined) return;

    const parsedDates = props.map(toDateObject);

    if (bookings.length) {
      bookings.forEach((booking) => {
        //console.log("booking record " + booking.bookdate.toUTCString());
        //console.log("clicked date " + clickdate.toDate().toUTCString());

        const bookdateUTCstring = booking.bookdate;

        if (bookdateUTCstring === clickdate.toString()) {
          if (!isUpdated) {
            removeBooking(clickdate);
            console.log("booking record " + booking.bookdate);
            console.log("clicked date " + clickdate.toString());
            console.log("removed date " + booking.bookdate);
            isUpdated = true;
          }
        }
      });

      parsedDates.forEach((parsedDate) => {
        if (clickdate.toString() === parsedDate.date.toString()) {
          !parsedDate.am_open_sessions && (amIsOpen = false);
          !parsedDate.pm_open_sessions && (pmIsOpen = false);
          //matchInParsedDate = true;
        }
      });

      if (!isUpdated) {
        addBooking(clickdate, amIsOpen, pmIsOpen);
        console.log("added date " + clickdate.toString());
      }
    } else {
      console.log("array is empty added date ");

      parsedDates.forEach((parsedDate) => {
        if (clickdate.toString() === parsedDate.date.toString()) {
          !parsedDate.am_open_sessions && (amIsOpen = false);
          !parsedDate.pm_open_sessions && (pmIsOpen = false);
          //matchInParsedDate = true;
        }
      });
      addBooking(clickdate, amIsOpen, pmIsOpen);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?year=${year}&month=${month}`)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setLoading(false);
        setProps(data);
      })
      .catch((error) => setError(true));
  }, [year, month]);

  useEffect(() => {
    updateEventType("Wedding");
  }, []);

  /*useEffect(() => {
    console.log("url changed");
    console.log(props);
    console.log(month);
    fetch(`http://localhost:5000/bookings?year=${year}&month=${month}`)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setLoading(false);
        setProps(data);
      })
      .catch((error) => setError(true));

    return () => {
      console.log("Cleaning up");
      setMonth("July");
    };
  }, [pathname]);*/

  const renderSectionCheckIndate = () => {
    if (error) {
      return (
        <div className="listingSection__wrap overflow-hidden">
          {/* HEADING */}
          <div>
            <h2 className="text-2xl font-semibold">Availability</h2>
            {/*<span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>*/}
          </div>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* CONTENT */}

          <div className="self-center">
            <p>Unable to contact server for existing reservations.</p>
          </div>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="listingSection__wrap overflow-hidden">
          {/* HEADING */}
          <div>
            <h2 className="text-2xl font-semibold">Availability</h2>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Prices may increase on weekends or holidays
            </span>
          </div>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* CONTENT */}

          <div className="justify-center">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <p>Loading....</p>
          </div>
        </div>
      );
    }

    return (
      <div className="listingSection__wrap overflow-hidden">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Availability</h2>
          {/*<span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>*/}
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}

        <div className="flex flex-col items-center">
          <Calendar
            value={...parsedExistingBookings}
            currentDate={new DateObject()}
            onMonthChange={updateMonth}
            onYearChange={updateYear}
            onFocusedDateChange={updateBookings}
            mapDays={({ date }) => {
              let dateprops = {};

              const parsedDates = props.map(toDateObject);

              parsedDates.some((parsedDate) => {
                /*console.log("parseDate " + parsedDate.date.toString());
                console.log("Date is open " + parsedDate.isdateopen);
                console.log(date.toString());*/
                if (
                  parsedDate.date.toString() === date.toString() &&
                  !parsedDate.isdateopen
                ) {
                  dateprops.style = {
                    ...dateprops.style,
                    color: "#0074d9",
                    backgroundColor: "#a5a5a5",
                    fontWeight: "bold",
                    border: "1px solid #777",
                  };
                } else if (parsedDate.date.toString() === date.toString()) {
                  dateprops.style = {
                    ...dateprops.style,
                    color: "#FE9200",
                    fontWeight: "bold",
                    border: "1px solid #FE9200",
                  };
                }
              });

              return {
                disabled: parsedDates.some(
                  (parsedDate) =>
                    parsedDate.date.toString() === date.toString() &&
                    !parsedDate.isdateopen
                ),

                ...dateprops,
              };
            }}
            multiple
            plugins={[<DatePanel sort="date" removeButton={false} />]}
          />
          <div className="flex items-center">
            <span className="h-5 w-5 bg-[#FE9200] rounded-full m-4" />
            Limited Slots
            <span className="h-5 w-5 bg-[#a5a5a5] rounded-full m-4" />
            Fully Booked
          </div>
        </div>
      </div>
    );
  };

  return renderSectionCheckIndate();
};

export default SectionDateRange;
