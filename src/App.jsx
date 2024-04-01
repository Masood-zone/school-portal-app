import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Protected from "./utils/protected";
import Payments from "./pages/payments";
import Registration from "./pages/registration";
import Results from "./pages/results";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route path="/dashboard" element={<Home />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/results" element={<Results />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
