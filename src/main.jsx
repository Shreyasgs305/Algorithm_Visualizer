import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import HomePage from "./pages/Home/HomePage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import FCFSVisualizer from "./pages/Visualizer/FCFSVisualizer";
import SJFVisualizer from "./pages/Visualizer/SJFVisualizer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PriorityVisualizer from "./pages/Visualizer/PriorityVisualizer";
import RoundRobinVisualizer from "./pages/Visualizer/RoundRobinVisualizer";
import DiskVisualizer from "./pages/Visualizer/DiskVisualizer";
import StackVisualizer from "./pages/Visualizer/StackVisualizer";
import QueueVisualizer from "./pages/Visualizer/QueueVisualizer";
import LinkedListVisualizer from "./pages/Visualizer/LinkedListVisualizer";
import ArrayVisualizer from "./pages/Visualizer/ArrayVisualizer";
import TreeVisualizer from "./pages/Visualizer/TreeVisualizer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Algorithm_Visualizer">
    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Categories" element={<CategoriesPage />} />
      <Route path="/Categories/FCFSAlgorithm" element={<FCFSVisualizer />} />
      <Route path="/Categories/SJFAlgorithm" element={<SJFVisualizer />} />

      <Route
        path="/Categories/RoundRobinAlgorithm"
        element={<RoundRobinVisualizer />}
      />

      <Route
        path="/Categories/PRIORITYAlgorithm"
        element={<PriorityVisualizer />}
      />

      <Route
        path="/Categories/Diskfcfs"
        element={<DiskVisualizer algo="FCFS" />}
      />

      <Route
        path="/Categories/Disksstf"
        element={<DiskVisualizer algo="SSTF" />}
      />

      <Route
        path="/Categories/Diskscan"
        element={<DiskVisualizer algo="SCAN" />}
      />

      <Route
        path="/Categories/Diskcscan"
        element={<DiskVisualizer algo="C-SCAN" />}
      />

      <Route
        path="/Categories/Disklook"
        element={<DiskVisualizer algo="LOOK" />}
      />

      <Route path="/Categories/Stack" element={<StackVisualizer />} />
      <Route path="/Categories/Queue" element={<QueueVisualizer />} />
      <Route path="/Categories/LinkedList" element={<LinkedListVisualizer />} />
      <Route path="/Categories/Array" element={<ArrayVisualizer />} />
      <Route path="/Categories/Tree" element={<TreeVisualizer />} />

      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />

      {/* Redirect invalid routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    <Footer />
  </BrowserRouter>,
);
