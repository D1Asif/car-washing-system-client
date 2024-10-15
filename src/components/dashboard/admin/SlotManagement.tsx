import { useGetAllServicesQuery } from "../../../redux/features/service/serviceApi"
import { TService } from "../../service/ServiceCard";
import ServiceSlots from "./ServiceSlots";


export default function SlotManagement() {
  const { data } = useGetAllServicesQuery("");
  const services = data?.data;

  return (
    <div className="px-0 my-4">
      <div className="space-y-8">
        {
          services?.map((service: TService) => (
            <ServiceSlots service={service} key={service._id} />
          ))
        }
      </div>
    </div>
  )
}
