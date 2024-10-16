import { Navigate } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/auth/authSlice";

export default function SignupPage() {
  const token = useAppSelector(useCurrentToken);

  if (token) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="flex justify-center items-center">
      <SignupForm />
    </div>
  )
}
