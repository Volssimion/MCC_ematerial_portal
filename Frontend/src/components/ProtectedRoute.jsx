import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles, children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → go to login
  if (!token) return <Navigate to="/login" replace />;

  // Role not allowed → redirect to login or a "not authorized" page
  if (!allowedRoles.includes(role)) return <Navigate to="/login" replace />;

  // Role allowed → render page
  return children;
}
