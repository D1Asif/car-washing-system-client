import { Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList, Spinner, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, toast } from "keep-react";
import { useGetAllUsersQuery, useMakeUserAdminMutation } from "../../../redux/features/user/userApi"
import { TUser } from "../../../redux/features/auth/authSlice";
import { DotsThreeOutlineVertical } from "phosphor-react";
import { useEffect, useRef } from "react";


export default function UserManagement() {
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const [makeUserAdmin, { isError }] = useMakeUserAdminMutation();
  const tableHeading = ['Name', 'Email', 'Phone', 'Role'];
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const users = data?.data;

  const handleMakeAdmin = (userId: string) => {
    makeUserAdmin(userId);
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isError]);

  return (
    <div>
      <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white mt-2 mb-5">
        User Management
      </h2>
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
          {users?.map((user: TUser) => (
            <TableRow key={user?._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell className="lowercase">{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {
                  user.role === 'user' && (
                    <Dropdown>
                      <DropdownAction asChild>
                        <button ref={buttonRef}>
                          <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                        </button>
                      </DropdownAction>
                      <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                        <DropdownList>
                          <DropdownItem>
                            <button onClick={() => handleMakeAdmin(user._id)}>
                              Make the user admin
                            </button>
                          </DropdownItem>
                        </DropdownList>
                      </DropdownContent>
                    </Dropdown>
                  )
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isLoading && <Spinner />}

    </div>
  )
}
