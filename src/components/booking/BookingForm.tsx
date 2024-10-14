import { Button, Input, Label } from "keep-react";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSlotByIdQuery } from "../../redux/features/slot/slotApi";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        vehicleType: '',
        vehicleBrand: '',
        vehicleModel: '',
        manufacturingYear: '',
        registrationPlate: '',
        phone: '',
    });

    const { slotId } = useAppSelector((selector) => selector.slot)
    const { data } = useGetSlotByIdQuery(slotId || undefined);

    const slot = data?.data;

    const navigate = useNavigate();

    const user = useAppSelector(selectCurrentUser);

    if (!user) {
        navigate("/login");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value, // Update the corresponding form field by its id
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body = {
            ...formData,
            serviceId: slot.service._id,
            slotId
        }
        // Add your form submission logic here
        console.log('Form submitted:', body);
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <fieldset className="space-y-2 text-lg my-3">
                <Label htmlFor="name" className="text-md font-normal text-gray-700">
                    Name*
                </Label>
                <Input id="name" type="text" value={user?.name} readOnly />
            </fieldset>
            <fieldset className="space-y-2 text-lg my-3">
                <Label htmlFor="email" className="text-md font-normal text-gray-700">
                    Email*
                </Label>
                <Input id="email" type="text" value={user?.email} readOnly />
            </fieldset>
            <fieldset className="space-y-2 text-lg my-3">
                <Label htmlFor="email" className="text-md font-normal text-gray-700">
                    Phone*
                </Label>
                <Input id="phone" type="text" value={user?.phone} readOnly />
            </fieldset>
            {/* Vehicle Type */}
            <fieldset className="space-y-2 text-lg my-3">
                <label htmlFor="vehicleType" className="text-md font-normal text-gray-700">
                    Vehicle Type*
                </label>
                <Input
                    id="vehicleType"
                    type="text"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            {/* Vehicle Brand */}
            <fieldset className="space-y-2 text-lg my-3">
                <label htmlFor="vehicleBrand" className="text-md font-normal text-gray-700">
                    Vehicle Brand*
                </label>
                <Input
                    id="vehicleBrand"
                    type="text"
                    value={formData.vehicleBrand}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            {/* Vehicle Model */}
            <fieldset className="space-y-2 text-lg my-3">
                <label htmlFor="vehicleModel" className="text-md font-normal text-gray-700">
                    Vehicle Model*
                </label>
                <Input
                    id="vehicleModel"
                    type="text"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            {/* Manufacturing Year */}
            <fieldset className="space-y-2 text-lg my-3">
                <label htmlFor="manufacturingYear" className="text-md font-normal text-gray-700">
                    Manufacturing Year*
                </label>
                <Input
                    id="manufacturingYear"
                    type="number"
                    value={formData.manufacturingYear}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            {/* Registration Plate */}
            <fieldset className="space-y-2 text-lg my-3">
                <label htmlFor="registrationPlate" className="text-md font-normal text-gray-700">
                    Registration Plate*
                </label>
                <Input
                    id="registrationPlate"
                    type="text"
                    value={formData.registrationPlate}
                    onChange={handleChange}
                    required
                />
            </fieldset>
            <Button type="submit">Confirm Booking</Button>
        </form>
    )
}
