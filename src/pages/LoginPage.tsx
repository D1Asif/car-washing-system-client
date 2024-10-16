import { Navigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";


export default function LoginPage() {
  const token = useAppSelector(useCurrentToken);

  if (token) {
    return <Navigate to="/dashboard" />
  }
  
  return (
    <div className="flex justify-center items-center">
      <LoginForm />
    </div>
  )
}
