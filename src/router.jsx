import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./about.jsx";
import Project from "./projects.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;