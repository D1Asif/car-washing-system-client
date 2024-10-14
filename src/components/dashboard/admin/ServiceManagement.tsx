import AddNewServiceModal from "./AddNewServiceModal";


export default function ServiceManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-heading-6 font-semibold">
          Service Management
        </h1>
        <AddNewServiceModal />
      </div>
    </div>
  )
}
