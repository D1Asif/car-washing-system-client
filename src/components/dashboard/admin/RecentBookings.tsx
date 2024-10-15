import { Spinner, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "keep-react";
import { useGetAllBookingsQuery } from "../../../redux/features/booking/bookingApi"
import { TUser } from "../../../redux/features/auth/authSlice";
import { TSlot } from "../../service/SlotPicker";
import { TService } from "../../service/ServiceCard";

type TBooking = {
    _id: string;
    customer: TUser;
    service: TService;
    slot: TSlot;
    vehicleType: string;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    slotDateTime: string;
};

export default function RecentBookings() {
    const { data, isLoading } = useGetAllBookingsQuery(undefined);
    const tableHeading = ['Customer Name', 'Service Name', 'Price', ' Slot Date & Time'];

    const bookings = data?.data;

    return (
        <div>
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white mb-5 mt-2">
                Bookings
            </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            tableHeading.map((heading) => (
                                <TableHead key={heading}>
                                    <div className="w-[200px]">{heading}</div>
                                </TableHead>
                            ))
                        }
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings?.map((booking: TBooking) => (
                        <TableRow key={booking?._id}>
                            <TableCell>{booking.customer.name}</TableCell>
                            <TableCell>{booking.service.name}</TableCell>
                            <TableCell>${booking.service.price}</TableCell>
                            <TableCell>
                                {(new Date(booking.slot.date)).toDateString()} ({booking.slot.startTime} - {booking.slot.endTime})
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {isLoading && <Spinner />}
        </div>
    )
}
