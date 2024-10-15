import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from 'keep-react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { pickSlot } from '../../redux/features/slot/slotSlice'
import { useGetSlotsOfServiceQuery } from '../../redux/features/slot/slotApi'

const getFormattedDate = (date: Date | undefined) => {
    const today = new Date(date || "");

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export type TSlot = {
    _id: string;
    service: string;
    date: string;        // In ISO 8601 format (e.g., "2024-06-15T00:00:00.000Z")
    startTime: string;   // Time in "HH:mm" format
    endTime: string;     // Time in "HH:mm" format
    isBooked: "available" | "booked" | "canceled";  // Assuming "available" and "booked" are possible values
}

export default function SlotPicker() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const { serviceId } = useParams();

    const formattedDate = getFormattedDate(date);
    const query = new URLSearchParams();

    query.set("date", formattedDate);
    query.set("service", serviceId as string);

    const { data, isLoading } = useGetSlotsOfServiceQuery(query.toString());
    const slots = data?.data;

    const dispatch = useAppDispatch();
    const slotState = useAppSelector((selector) => selector.slot);

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">Pick a Slot</h2>
            <Popover showArrow={false} placement="bottom-start">
                <PopoverAction asChild>
                    <Button
                        color="secondary"
                        size="lg"
                        className="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
                        variant="outline">
                        <Calendar size={20} className="text-metal-400 dark:text-white" />
                        {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
                    </Button>
                </PopoverAction>
                <PopoverContent className="z-50 max-w-min">
                    <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
                </PopoverContent>
            </Popover>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    slots?.length > 0 ? (
                        slots?.map((slot: TSlot) => (
                            <div
                                onClick={() => slot.isBooked === "booked" ? undefined : dispatch(pickSlot(slot._id))}
                                key={slot._id}
                                className={`p-3 border rounded-lg ${slot.isBooked === "booked" ? "opacity-50" : "cursor-pointer"} ${slot._id === slotState.slotId ? "border-[3px] border-primary-500" : ""}`}
                            >
                                <p>
                                    Date: <b>{`${new Date(slot.date).toDateString()}`}</b>
                                </p>
                                <p>
                                    Start: <b>{slot.startTime}</b>
                                </p>
                                <p>
                                    End: <b>{slot.endTime}</b>
                                </p>
                                <p>
                                    Status: <b>{slot.isBooked}</b>
                                </p>
                            </div>
                        ))
                    ) : (
                        !isLoading && <h3 className="text-heading-6">No Slots found in this date</h3>
                    )
                }
            </div>
            {slotState.slotId && (
                <Button>
                    <Link to='/booking'>Book Slot</Link>
                </Button>
            )}
        </div>
    )
}
