import AdminDashboard from "../components/dashboard/AdminDashboard";
import UserDashboard from "../components/dashboard/UserDashboard";
import { selectCurrentUser } from "../redux/features/auth/authSlice"
import { useAppSelector } from "../redux/hooks"


export default function DashboardPage() {
  const user = useAppSelector(selectCurrentUser);

  console.log(user);

  if (user?.role === 'admin') {
    return <AdminDashboard />
  }

  if (user?.role === 'user') {
    return <UserDashboard />
  }
}
