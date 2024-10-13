import { CreditCard, Recycle, Star } from "phosphor-react";
import { useGetServiceByIdQuery } from "../../redux/features/service/serviceApi";
import { useParams } from "react-router-dom";

export default function ServiceInfo() {
    const { serviceId } = useParams();
    const { data } = useGetServiceByIdQuery(serviceId)
    const service = data?.data;

    return (
        <div className="max-w-lg">
            <h1 className="text-3xl font-bold mb-2">
                {service?.name}
            </h1>

            {/* Star Rating and Reviews */}
            <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} weight="fill" size={22} />
                    ))}
                </div>
                <p className="ml-2 text-md text-gray-500">(157 Reviews)</p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline space-x-3 mb-4">
                <p className="text-2xl font-bold text-black">${service?.price}</p>
            </div>

            <div className="flex items-baseline space-x-3 mb-4">
                <p className="text-2xl font-bold text-black">
                    Duration: {service?.duration} mins
                </p>
            </div>

            {/* Features */}
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-500 space-y-1 text-lg mb-4">
                {service?.description}
            </p>

            {/* Additional Info */}
            <ul className="space-y-2 text-lg">
                {/* <li className="flex items-center space-x-2 text-gray-600">
                    <GlobeHemisphereEast size={22} color="rgb(27, 77, 255)" />
                    <span>Free shipping worldwide</span>
                </li> */}
                <li className="flex items-center space-x-2 text-gray-600">
                    <CreditCard size={22} color="#1b4dff" />
                    <span>100% Secured Payment</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                    <Recycle size={22} color="#1b4dff" />
                    <span>Environment friendly</span>
                </li>
            </ul>
        </div>
    );
}
