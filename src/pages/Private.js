import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

function Private() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default Private;
