import { Button, toast } from "keep-react";
import { TSlot } from "../../service/SlotPicker";
import { useUpdateSlotStatusMutation } from "../../../redux/features/slot/slotApi";
import { useEffect } from "react";

export default function SlotCard({ slot }: { slot: TSlot }) {
  const [updateSlotStatus, { isError, isLoading }] = useUpdateSlotStatusMutation();

  const handleStatus = (status: string) => {
    updateSlotStatus({
      slotId: slot._id,
      body: {
        isBooked: status
      }
    })
  }

  useEffect(() => {
    if (isError) {
      toast.error("Some thing went wrong");
    }
  }, [isError]);

  return (
    <div className="border p-5 text-lg rounded-xl">
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
      {
        slot.isBooked !== "booked" && (
          <Button
            size="sm" variant="outline" className="mt-2"
            color={slot.isBooked === 'available' ? "error" : "success"}
            onClick={() => handleStatus(slot.isBooked === 'available' ? "canceled" : "available")}
            disabled={isLoading}
          >
            {slot.isBooked === 'available' ? "Cancel Slot" : "Make Available"}
          </Button>
        )
      }
    </div>
  )
}
