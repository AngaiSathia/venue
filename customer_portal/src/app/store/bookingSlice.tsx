import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { Booking } from "@/app/store/models/booking";
import { DateObject } from "react-multi-date-picker";
interface BookingState {
  eventType: string;
  bookings: Booking[];
  addBooking: (
    clickdate: DateObject,
    amIsOpen: boolean,
    pmIsOpen: boolean
  ) => void;
  removeBooking: (clickdate: DateObject) => void;
  updateEventType: (eventType: string) => void;
}

const useBookingStore = create<BookingState>()(
  devtools(
    persist(
      (set) => ({
        eventType: "",
        bookings: [],
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
          })),
        removeBooking: (clickdate) =>
          set((state) => ({
            eventType: state.eventType,
            bookings: state.bookings.filter(
              (booking) => booking.bookdate !== clickdate.toString()
            ),
          })),
        updateEventType: (eventType) =>
          set((state) => ({
            eventType: eventType,
            bookings: state.bookings,
          })),
      }),
      {
        name: "booking-storage",
        onRehydrateStorage: (state) => {
          console.log("hydration starts");

          // optional
          return (state, error) => {
            if (error) {
              console.log("an error happened during hydration", error);
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
