import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
    return (
        <div>
            PrivateRoute
            <Outlet />
        </div>
    )
}
