import BookingForm from "../components/booking/BookingForm";
import { useGetSlotByIdQuery } from "../redux/features/slot/slotApi";
import { useAppSelector } from "../redux/hooks"

export default function BookingPage() {
  const { slotId } = useAppSelector((selector) => selector.slot)
  const { data } = useGetSlotByIdQuery(slotId || undefined);

  const slot = data?.data;

  if (!slot) {
    return (
      <div className="text-2xl font-semibold text-center">No slot selected!</div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-20">
      {/* Slot Summary */}
      <div
        className="p-6 border rounded-lg w-full max-h-[400px] text-lg"
      >
        <h1 className="text-heading-6 font-semibold mb-4">Service Details</h1>
        <p>
          Service name: <b>{slot?.service.name}</b>
        </p>
        <p>
          Date: <b>{`${new Date(slot?.date).toDateString()}`}</b>
        </p>
        <p>
          Start: <b>{slot?.startTime}</b>
        </p>
        <p>
          End: <b>{slot?.endTime}</b>
        </p>
        <p>
          Status: <b>{slot?.isBooked}</b>
        </p>
      </div>
      <BookingForm />
    </div>
  )
}
