import { Spinner } from "keep-react";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import ServiceList from "../service/ServiceList";

export default function FeaturedServiceSection() {
    const { data, isLoading } = useGetAllServicesQuery("tags=featured");

    const featuredServices = data?.data;
    return (
        <div>
            <h3 className="text-heading-5 font-semibold mb-6">Featured Services</h3>
            {isLoading && <Spinner />}
            <ServiceList services={featuredServices} />
        </div>
    )
}
