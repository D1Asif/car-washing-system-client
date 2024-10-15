import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import ServiceList from "../service/ServiceList";

export default function FeaturedServiceSection() {
    const { data } = useGetAllServicesQuery("tags=featured");

    const featuredServices = data?.data;
    return (
        <div>
            <h3 className="text-heading-5 font-semibold mb-6">Featured Services</h3>
            <ServiceList services={featuredServices} />
        </div>
    )
}
