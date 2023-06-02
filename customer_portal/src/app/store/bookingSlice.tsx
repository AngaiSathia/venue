import { create } from "zustand";
import {
  devtools,
  persist,
  createJSONStorage,
  StateStorage,
} from "zustand/middleware";
import secureLocalStorage from "react-secure-storage";
import { v4 as uuidv4 } from "uuid";
import { Booking } from "@/app/store/models/booking";
import { confirmedDate } from "@/app/store/models/confirmedDate";
import { DateObject } from "react-multi-date-picker";
import * as process from "process";
interface BookingState {
  eventType: string;
  bookings: Booking[];
  confirmedDates: confirmedDate[];
  addBooking: (
    clickdate: DateObject,
    amIsOpen: boolean,
    pmIsOpen: boolean
  ) => void;
  removeBooking: (clickdate: DateObject) => void;
  addConfirmedDate: (date: string, am_pm: string, timing: string) => void;
  removeConfirmedDate: (date: string, am_pm: string, timing: string) => void;
  updateEventType: (eventType: string) => void;
}

const privatekey = String(
  process.env.NEXT_PUBLIC_REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY
);

const storage: StateStorage = {
  getItem: (name: string): string => {
    return String(secureLocalStorage.getItem(name));
  },
  setItem: (name: string, value: string) => {
    secureLocalStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    secureLocalStorage.removeItem(name);
  },
};

const useBookingStore = create<BookingState>()(
  devtools(
    persist(
      (set) => ({
        eventType: "",
        bookings: [],
        confirmedDates: [],
        addBooking: (clickdate, amIsOpen, pmIsOpen) =>
          set((state) => ({
            eventType: state.eventType,
            bookings: [
              ...state.bookings,
              {
                id: uuidv4(),
                bookdate: clickdate.toString(),
                am_avail: amIsOpen,
                pm_avail: pmIsOpen,
              },
            ],
            confirmedDates: state.confirmedDates,
          })),
        removeBooking: (clickdate) =>
          set((state) => ({
            eventType: state.eventType,
            bookings: state.bookings.filter(
              (booking) => booking.bookdate !== clickdate.toString()
            ),
            confirmedDates: state.confirmedDates,
          })),
        addConfirmedDate: (date, am_pm, timing) =>
          set((state) => ({
            eventType: state.eventType,
            bookings: state.bookings,
            confirmedDates: [
              ...state.confirmedDates,
              {
                date: date,
                am_pm: am_pm,
                timing: timing,
              },
            ],
          })),
        removeConfirmedDate: (date, am_pm, timing) =>
          set((state) => ({
            eventType: state.eventType,
            bookings: state.bookings,
            confirmedDates: state.confirmedDates.filter((confirmedDate) => {
              let confirmedDateStr =
                confirmedDate.date +
                " " +
                confirmedDate.am_pm +
                " " +
                confirmedDate.timing;
              let selectConfirmDate = date + " " + am_pm + " " + timing;

              return confirmedDateStr !== selectConfirmDate ? true : false;
            }),
          })),
        updateEventType: (eventType) =>
          set((state) => ({
            eventType: eventType,
            bookings: state.bookings,
            confirmedDates: state.confirmedDates,
          })),
      }),
      {
        name: "booking-storage",
        //storage: createJSONStorage(() => storage),
        onRehydrateStorage: (state) => {
          console.log("hydration starts");

          // optional
          return (state, error) => {
            if (error) {
              console.log(
                "an error happened during hydration - localStorage undefined"
              );
            } else {
              state?.bookings.forEach((booking) => {
                console.log("printing from store " + booking.bookdate);
              });

              console.log("hydration finished");
            }
          };
        },
      }
    )
  )
);

export default useBookingStore;
