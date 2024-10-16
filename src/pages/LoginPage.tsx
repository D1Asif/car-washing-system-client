import { Navigate, useSearchParams } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";


export default function LoginPage() {
  const token = useAppSelector(useCurrentToken);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  if (token && redirect !== 'review') {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="flex justify-center items-center">
      <LoginForm />
    </div>
  )
}
