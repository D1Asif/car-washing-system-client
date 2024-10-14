import Countdown from "./Countdown";

type TService = {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

type TSlot = {
    _id: string;
    service: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
};

export type TBooking = {
    _id: string;
    customer: string;
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

export default function BookingCard({ booking, fromPast }: { booking: TBooking, fromPast?: boolean }) {
    return (
        <div className="p-3 border rounded-lg text-lg">
            <p>
                Booking ID: &nbsp;
                <b>{booking?._id}</b>
            </p>
            <p>
                Service Name: &nbsp;
                <b>{booking?.service.name}</b>
            </p>
            <p>
                Slot date: &nbsp;
                <b>{new Date(booking?.slot.date).toDateString()}</b>
            </p>
            <p>
                Slot start time: &nbsp;
                <b>{booking?.slot.startTime}</b>
            </p>
            <p>
                Slot end time: &nbsp;
                <b>{booking?.slot.endTime}</b>
            </p>
            <p>
                Price: &nbsp;
                <b>${booking?.service.price}</b>
            </p>
            {!fromPast && <Countdown targetDate={booking?.slotDateTime} />}
        </div>
    )
}
