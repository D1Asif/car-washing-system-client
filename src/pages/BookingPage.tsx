import { useGetSlotByIdQuery } from "../redux/features/service/serviceApi"
import { useAppSelector } from "../redux/hooks"


export default function BookingPage() {
  const { slotId } = useAppSelector((selector) => selector.slot)
  const slot = useGetSlotByIdQuery(slotId);
  console.log(slot);
  return (
    <div>BookingPage</div>
  )
}
