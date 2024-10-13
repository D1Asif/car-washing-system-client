import { useSearchParams } from "react-router-dom";
import ServiceFilter from "../components/service/ServiceFilter";
import ServiceList from "../components/service/ServiceList";
import ServiceSearch from "../components/service/ServiceSearch";
import { useGetAllServicesQuery } from "../redux/features/service/serviceApi";

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useGetAllServicesQuery(searchParams.toString());
  const services = data?.data;

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-heading-5 font-semibold mb-6">Services</h3>
        <div className="flex gap-5 z-20">
          <ServiceSearch />
          <ServiceFilter />
        </div>
      </div>
      {
        services?.length > 0 ? (
          <ServiceList services={services} />
        ) : (
          !isLoading && <h3 className="text-center text-heading-6">No Services found</h3>
        )
      }
      {
        isLoading && (
          <h3 className="text-center text-2xl">Loading...</h3>
        )
      }
    </div>
  )
}
