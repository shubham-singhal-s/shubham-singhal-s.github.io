import { LoadingSpinner } from "@/views/utils/loader";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() =>
  import("@/views/home").then((m) => ({ default: m.Home }))
);
const About = lazy(() =>
  import("@/views/about").then((m) => ({ default: m.About }))
);
const Education = lazy(() =>
  import("@/views/education").then((m) => ({ default: m.Education }))
);
const Experience = lazy(() =>
  import("@/views/experience").then((m) => ({ default: m.Experience }))
);
const Skills = lazy(() =>
  import("@/views/skills").then((m) => ({ default: m.Skills }))
);

export const AppRouter = () => (
  <Suspense fallback={<LoadingSpinner center />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Suspense>
);
