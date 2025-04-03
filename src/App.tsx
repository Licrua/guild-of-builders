import { DashboardLayout } from "./components/services/DashboardLayout";
import Home from "./components/startingPage/Home";
import NotFound from "./components/services/notFound";
import "./globals.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Layout } from "./components/general/Layout";
import { CreateService } from "./components/services/CreateService";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/user/dashboard" element={<DashboardLayout />} />
          <Route
            path="/user/dashboard/createService"
            element={<CreateService />}
          />
          <Route
            path="/user/dashboard/editService/:id"
            element={<EditService />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
