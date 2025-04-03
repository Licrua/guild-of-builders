import { DashboardLayout } from './components/services/DashboardLayout';
import Home from './components/startingPage/Home';
import NotFound from './components/services/notFound';
import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/general/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/user/dashboard" element={<DashboardLayout />} />
        </Routes>
      </Layout>
    </Router>
  );
}
