// frontend/src/shared/components/auth/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

function isTokenExpired(token) {
  try {
    const [, payloadBase64] = token.split(".");
    if (!payloadBase64) return true;
    const payload = JSON.parse(atob(payloadBase64));
    if (!payload.exp) return false;
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

export default function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    sessionStorage.removeItem("token");
    return <Navigate to="/auth" replace />;
  }

  return children;
}