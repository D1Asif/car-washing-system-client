import { Button, Input, Label, Modal, ModalAction, ModalClose, ModalContent, toast } from "keep-react";
import { useEffect, useState } from "react";
import { useCreateNewServiceMutation } from "../../../redux/features/service/serviceApi";


export default function AddNewServiceModal() {
    const [formState, setFormState] = useState({
        name: '',
        description: '',
        price: '',
        duration: '',
        tags: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [createNewService, { isError, data, error }] = useCreateNewServiceMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const body = {
            ...formState,
            price: Number(formState.price),
            duration: Number(formState.duration),
            tags: formState.tags ? formState.tags.split(",") : []
        }

        createNewService(body);

        setIsModalOpen(false);
    };

    console.log(data);
    console.log(error);

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong!")
        }
    }, [isError])

    return (
        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
            <ModalAction asChild>
                <Button>Add New Service</Button>
            </ModalAction>
            <ModalContent className="w-[20rem] lg:w-[26rem]">
                <ModalClose className="absolute right-4 top-4" />
                <form action="" onSubmit={handleSubmit}>
                    <fieldset className="space-y-1">
                        <Label htmlFor="name">Service Name*</Label>
                        <div className="relative">
                            <Input
                                id="name"
                                value={formState.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter service name"
                                required
                            />
                        </div>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <Label htmlFor="description">Description*</Label>
                        <div className="relative">
                            <Input
                                id="description"
                                value={formState.description}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter service description"
                                required
                            />
                        </div>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <Label htmlFor="price">Price*</Label>
                        <div className="relative">
                            <Input
                                id="price"
                                value={formState.price}
                                onChange={handleChange}
                                type="number"
                                placeholder="Enter service price"
                                required
                            />
                        </div>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <Label htmlFor="duration">Duration (in minutes)*</Label>
                        <div className="relative">
                            <Input
                                id="duration"
                                value={formState.duration}
                                onChange={handleChange}
                                type="number"
                                placeholder="Enter service duration"
                                required
                            />
                        </div>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <Label htmlFor="tags">Tags (Separated by comma)</Label>
                        <div className="relative">
                            <Input
                                id="tags"
                                value={formState.tags}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter service duration"
                            />
                        </div>
                    </fieldset>

                    <Button type="submit" className="mt-3">
                        Create Service
                    </Button>
                </form>

            </ModalContent>
        </Modal>
    )
}
