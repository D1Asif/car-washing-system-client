import { X } from "phosphor-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center mb-40 mt-28">
      <div className="flex size-12 items-center justify-center rounded-full bg-metal-50 text-red-600">
        <X size={28} weight="bold" />
      </div>
      <h1 className="text-heading-6 font-semibold mt-4">
        Error: 404 - This page does not exist!
      </h1>
    </div>
  )
}