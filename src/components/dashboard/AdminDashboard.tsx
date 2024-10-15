import { TabContent, TabItem, TabList, Tabs } from "keep-react";
import ServiceManagement from "./admin/ServiceManagement";
import SlotManagement from "./admin/SlotManagement";
import UserManagement from "./admin/UserManagement";
import RecentBookings from "./admin/RecentBookings";

export default function AdminDashboard() {
  return (
    <Tabs defaultActive="serviceManagement" className="mx-auto">
      <TabList>
        <TabItem value="serviceManagement">Service Management</TabItem>
        <TabItem value="slotManagement">Slot Management</TabItem>
        <TabItem value="userManagement">User Management</TabItem>
        <TabItem value="recentBookings">Recent Bookings</TabItem>
      </TabList>
      <div className="py-3">
        <hr />
      </div>
      <TabContent value="serviceManagement">
        <ServiceManagement />
      </TabContent>
      <TabContent value="slotManagement">
        <SlotManagement />
      </TabContent>
      <TabContent value="userManagement">
        <UserManagement />
      </TabContent>
      <TabContent value="recentBookings">
        <RecentBookings />
      </TabContent>
    </Tabs>
  )
}
