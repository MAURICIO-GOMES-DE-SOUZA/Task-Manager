import { Routes, Route } from "react-router-dom";
import { App } from "../pages/app";
import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Tasks } from "../pages/Tasks";
import { CreateTasks } from "../pages/Create Tasks";
import { About } from "../pages/About";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Tasks" element={<Tasks />} />
        <Route path="Create-Tasks" element={<CreateTasks />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
