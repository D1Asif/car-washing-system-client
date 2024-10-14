import { TabContent, TabItem, TabList, Tabs } from "keep-react";
import UserBookings from "./user/UserBookings";
import AccountInformation from "./user/AccountInformation";

export default function UserDashboard() {
    return (
        <Tabs defaultActive="bookings">
            <TabList>
                <TabItem value="bookings">Bookings</TabItem>
                <TabItem value="accountInformation">Account Information</TabItem>
            </TabList>
            <div className="py-3">
                <hr />
            </div>
            <TabContent value="bookings">
                <UserBookings />
            </TabContent>
            <TabContent value="accountInformation">
                <AccountInformation />
            </TabContent>
        </Tabs>
    )
}
