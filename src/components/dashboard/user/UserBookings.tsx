import { Spinner } from "keep-react";
import { useGetUsersBookingsQuery } from "../../../redux/features/booking/bookingApi"
import BookingCard, { TBooking } from "./BookingCard";


export default function UserBookings() {
    const { data: pastBookingData, isLoading: pastLoading } = useGetUsersBookingsQuery("time=past");
    const { data: upcomingBookingData, isLoading: upcomingLoading } = useGetUsersBookingsQuery("time=upcoming");

    const upcomingBookings = upcomingBookingData?.data
    const pastBookings = pastBookingData?.data;

    return (
        <div>
            <h1 className="text-heading-6 font-semibold mt-2">
                Upcoming Bookings
            </h1>
            {upcomingLoading && <Spinner className="mt-3" />}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                {
                    upcomingBookings?.map((booking: TBooking) => (
                        <BookingCard booking={booking} key={booking._id} />
                    ))
                }
            </div>
            <h1 className="text-heading-6 font-semibold mt-5">
                Past Bookings
            </h1>
            {pastLoading && <Spinner className="mt-3" />}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                {
                    pastBookings?.map((booking: TBooking) => (
                        <BookingCard booking={booking} key={booking._id} fromPast={true} />
                    ))
                }
            </div>
        </div>
    )
}
