import { Route, Routes } from 'react-router';
import Home from './components/pages/Home.tsx';
import ProjectDetails from './components/pages/ProjectDetails.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
