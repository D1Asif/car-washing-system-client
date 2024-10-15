import { Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList, Spinner, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "keep-react";
import AddNewServiceModal from "./AddNewServiceModal";
import { DotsThreeOutlineVertical } from "phosphor-react";
import { useGetAllServicesQuery } from "../../../redux/features/service/serviceApi";

type TService = {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  tags: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default function ServiceManagement() {
  const tableHeading = ['Service Name', 'Price', 'Duration', 'Tags'];

  const { data, isLoading } = useGetAllServicesQuery("");

  const services = data?.data;

  return (
    <div>
      <div className="px-0 my-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Service Management</h2>
          </div>
          <div className="flex items-center gap-5">
            <AddNewServiceModal />
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {
              tableHeading.map((heading) => (
                <TableHead key={heading}>
                  <div className="w-[200px]">{heading}</div>
                </TableHead>
              ))
            }
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.map((service: TService) => (
            <TableRow key={service?._id}>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell>{service.duration}</TableCell>
              <TableCell>{service?.tags?.join(", ") || "None"}</TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button>
                      <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                    </button>
                  </DropdownAction>
                  <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                    <DropdownList>
                      <AddNewServiceModal service={service} />
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownList>
                  </DropdownContent>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="my-3" />
        </div>
      )}
    </div>
  )
}
