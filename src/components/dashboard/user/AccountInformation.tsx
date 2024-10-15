import React, { useEffect, useState } from "react";
import { selectCurrentUser, setUser } from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { Input, Spinner, toast } from "keep-react";
import { Check, PencilSimple } from "phosphor-react";
import { useUpdateUserAccountInfoMutation } from "../../../redux/features/user/userApi";

export default function AccountInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const [formData, setFormData] = useState({
    name: user?.name,
    phone: user?.phone,
    address: user?.address
  })

  const [updateUserAccountInfo, { isError, data, isLoading }] = useUpdateUserAccountInfoMutation();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = () => {
    updateUserAccountInfo(formData)
    setIsEditing(false)
  }

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
    if (data?.data) {
      dispatch(setUser({user: data.data}))
    }
  }, [isError, data?.data])

  return (
    <div>
      <div className="flex gap-4 mt-2">
        <h1 className="text-heading-6 font-semibold">
          Account Information
        </h1>
        <div
          className="cursor-pointer border-2 border-blue-500 rounded-full size-8 flex items-center justify-center text-primary-500"
        >
          {
            isEditing ? (
              <Check
                size={26}
                onClick={handleSubmit}
              />
            ) : (
              <PencilSimple
                size={20}
                onClick={() => setIsEditing(true)}
              />
            )
          }
        </div>
      </div>
      <div className="text-lg space-y-2 mt-2">
        {isLoading && <Spinner />}
        <p>
          Name: &nbsp;
          {
            isEditing ? (
              <Input
                className="max-w-xl mt-2"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            ) : (
              <b>{user?.name}</b>
            )
          }
        </p>
        <p>
          Email: <b>{user?.email}</b>
        </p>
        <p>
          Phone: &nbsp;
          {
            isEditing ? (
              <Input
                className="max-w-xl mt-2"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            ) : (
              <b>{user?.phone}</b>
            )
          }
        </p>
        <p>
          Address: &nbsp;
          {
            isEditing ? (
              <Input
                className="max-w-xl mt-2"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            ) : (
              <b>{user?.address}</b>
            )
          }
        </p>
      </div >
    </div >
  )
}
