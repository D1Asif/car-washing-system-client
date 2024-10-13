import ServiceInfo from "../components/service/ServiceInfo";
import SlotPicker from "../components/service/SlotPicker";

export default function ServiceDetailsPage() {
  return (
    <div className="space-y-8">
      <ServiceInfo />
      <SlotPicker />
    </div>
  )
}
