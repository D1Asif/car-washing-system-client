import ServiceCard, { TService } from "./ServiceCard"


export default function ServiceList({ services }: { services: TService[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services?.map((service) => (
                    <ServiceCard service={service} key={service._id} />
                ))
            }
        </div>
    )
}
