import { Button, DropdownItem, Modal, ModalAction, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle, toast } from "keep-react";
import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useDeleteServiceMutation } from "../../../redux/features/service/serviceApi";

export default function DeleteServiceModal({ serviceId }: { serviceId: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteService, { isError }] = useDeleteServiceMutation();

    const handleDelete = () => {
        deleteService(serviceId);

        setIsModalOpen(false);
    }

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong!")
        }
    }, [isError])

    return (
        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
            <ModalAction asChild>
                <Button style={{ "all": "unset", "width": "100%" }}>
                    <DropdownItem>
                        Delete
                    </DropdownItem>
                </Button>
            </ModalAction>
            <ModalContent>
                <ModalClose className="absolute right-4 top-4" />
                <ModalHeader className="mb-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
                        <Trash size={28} />
                    </div>
                    <div className="space-y-1">
                        <ModalTitle>Are You Sure?</ModalTitle>
                        <ModalDescription>
                            The service will be deleted permanently. This action cannot be undone.
                        </ModalDescription>
                    </div>
                </ModalHeader>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button variant="outline" color="secondary">Cancel</Button>
                    </ModalClose>
                    <Button onClick={handleDelete} color="error">Confirm</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
