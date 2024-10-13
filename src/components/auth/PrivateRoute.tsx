import { Navigate, Outlet } from "react-router-dom";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

export default function PrivateRoute() {
    const token = useAppSelector(useCurrentToken);

    if (!token) {
        return <Navigate to="/login" replace />
    }
    
    return (
        <>{<Outlet />}</>
    );
}
