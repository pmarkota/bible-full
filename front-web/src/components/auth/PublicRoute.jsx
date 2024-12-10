import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
