import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingPage";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/form"; // adjust the path if different


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="convert" element={<Form />} />  {/* Prescription form */}
      </Route>
    </Routes>
  );
}

export default App;
