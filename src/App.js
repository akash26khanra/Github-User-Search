import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login></Login>} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
