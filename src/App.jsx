import "./pages/login/Login.css";
import Login from "./pages/login/Login";
import BoardingDetails from "./pages/boardingpassgenerator/boardingdetails/BoardingDetails";
import FlightDetails from "./pages/boardingpassgenerator/FlightDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarcodeGenerator from "./pages/boardingpassgenerator/BoardingPass";
import PrivateRoute from "./components/privateRoute/privateRoute";
import Profile from "./pages/profile/Profile";
import PaymentPage from "./pages/boardingpassgenerator/paymentdetails/PaymentPage";
import PaymentSuccessful from "./pages/boardingpassgenerator/paymentdetails/PaymentSuccessful";
import CheckFlights from "./pages/guest/CheckFLights";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        <Route path="/guest-flight-checking" element={<CheckFlights />} />
        {/* Protected Routes */}
        <Route
          path="/flight-details"
          element={
            <PrivateRoute>
              <FlightDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/boarding-details"
          element={
            <PrivateRoute>
              <BoardingDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/boarding-pass"
          element={
            <PrivateRoute>
              <BarcodeGenerator />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/make-payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment-successful"
          element={
            <PrivateRoute>
              <PaymentSuccessful />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
