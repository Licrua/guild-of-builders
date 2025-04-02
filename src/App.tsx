import { DashboardLayout } from './components/services/DashboardLayout';
import Home from './components/services/Home';
import NotFound from './components/services/notFound';
import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}
