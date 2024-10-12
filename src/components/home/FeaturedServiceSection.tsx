import ServiceList from "../service/ServiceList";

export default function FeaturedServiceSection() {
    const services = [
        {
            _id: "66e9b35bb2f5268274bfe1e6",
            name: "Car Wash Pro 2",
            description: "Professional car washing service 2",
            price: 50,
            duration: 60,
            isDeleted: false,
            tags: ["featured"]
        },
        {
            _id: "66e9b35bb2f5268274bfe1e6",
            name: "Car Wash Pro 2",
            description: "Professional car washing service 2",
            price: 50,
            duration: 60,
            isDeleted: false,
            tags: ["featured"]
        },
        {
            _id: "66e9b35bb2f5268274bfe1e6",
            name: "Car Wash Pro 2",
            description: "Professional car washing service 2",
            price: 50,
            duration: 60,
            isDeleted: false,
            tags: ["featured"]
        },
        {
            _id: "66e9b35bb2f5268274bfe1e6",
            name: "Car Wash Pro 2",
            description: "Professional car washing service 2",
            price: 50,
            duration: 60,
            isDeleted: false,
            tags: ["featured"]
        },
        {
            _id: "66e9b35bb2f5268274bfe1e6",
            name: "Car Wash Pro 2",
            description: "Professional car washing service 2",
            price: 50,
            duration: 60,
            isDeleted: false,
            tags: ["featured"]
        },
        {
            _id: "66e9b35bb2f5268274bfe1e6",
            name: "Car Wash Pro 2",
            description: "Professional car washing service 2",
            price: 50,
            duration: 60,
            isDeleted: false,
            tags: ["featured"]
        },
    ]
    return (
        <div>
            <h3 className="text-heading-5 font-semibold mb-6">Featured Services</h3>
            <ServiceList services={services} />
        </div>
    )
}
