import { About } from "@/views/about";
import { Education } from "@/views/education";
import { Experience } from "@/views/experience";
import { Home } from "@/views/home";
import { Skills } from "@/views/skills";
import { Route, Routes } from "react-router";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/education" element={<Education />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
