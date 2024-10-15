import { Button, Input, Label, Modal, ModalAction, ModalClose, ModalContent, toast } from "keep-react";
import { useEffect, useState } from "react";
import { useCreateSlotsMutation } from "../../../redux/features/slot/slotApi";


export default function CreateSlotsModal({ serviceId }: { serviceId: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formState, setFormState] = useState({
        service: serviceId,
        date: '',
        startTime: '',
        endTime: ''
    });

    const [createSlots, { isError }] = useCreateSlotsMutation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createSlots(formState);
        setIsModalOpen(false);

        setFormState({
            service: '',
            date: '',
            startTime: '',
            endTime: ''
        })
    };

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong!")
        }
    }, [isError]);

    return (
        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
            <ModalAction asChild>
                <Button>Create slots</Button>
            </ModalAction>
            <ModalContent className="w-[20rem] lg:w-[26rem]">
                <ModalClose className="absolute right-4 top-4" />
                <form action="" onSubmit={handleSubmit}>

                    <fieldset className="space-y-1">
                        <Label htmlFor="date">Date*</Label>
                        <Input
                            id="date"
                            value={formState.date}
                            onChange={handleChange}
                            type="date"
                            required
                        />
                    </fieldset>

                    <fieldset className="space-y-1">
                        <Label htmlFor="startTime">Start Time*</Label>
                        <Input
                            id="startTime"
                            value={formState.startTime}
                            onChange={handleChange}
                            type="time"
                            required
                        />
                    </fieldset>

                    <fieldset className="space-y-1">
                        <Label htmlFor="endTime">End Time*</Label>
                        <Input
                            id="endTime"
                            value={formState.endTime}
                            onChange={handleChange}
                            type="time"
                            required
                        />
                    </fieldset>

                    <Button type="submit" className="mt-4">
                        Create Slots
                    </Button>
                </form>

            </ModalContent>
        </Modal>
    )
}
