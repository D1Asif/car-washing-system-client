import { Spinner } from "keep-react";
import { useGetSlotsOfServiceQuery } from "../../../redux/features/slot/slotApi";
import { TService } from "../../service/ServiceCard";
import SlotCard from "./SlotCard";
import { TSlot } from "../../service/SlotPicker";
import CreateSlotsModal from "./CreateSlotsModal";

export default function ServiceSlots({ service }: { service: TService }) {
    const { data, isLoading } = useGetSlotsOfServiceQuery(`service=${service._id}`);

    const slots = data?.data;

    return (
        <div>
            <div className="flex justify-between items-center gap-3">
                <h2 className="text-heading-6 font-semibold text-metal-900">
                    Slots for {service.name} ({slots?.length})
                </h2>
                <CreateSlotsModal serviceId={service._id} />
            </div>
            <div className="my-4">
                <hr />
            </div>
            {!isLoading && slots?.length === 0 && (
                <h4 className="text-xl my-4">No Slots found</h4>
            )}
            {isLoading && <Spinner className="my-3" />}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {
                    slots?.map((slot: TSlot) => (
                        <SlotCard key={slot._id} slot={slot} />
                    ))
                }
            </div>
        </div>
    )
}
