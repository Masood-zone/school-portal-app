import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ children }) {
  const student = useSelector((state) => state.student);
  const location = useLocation();

  if (!student.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default Protected;
