// src/routes/PrivateRoute.jsx
import { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { ImSpinner3 } from "react-icons/im";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner3 className="text-5xl animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
