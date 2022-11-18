import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute outlet={<Dashboard />} />} />
    </Routes>
  );
};

export default App;
