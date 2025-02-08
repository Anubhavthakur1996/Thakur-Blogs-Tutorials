import { Route, Routes } from "react-router";
import Splash from "../components/splash";
import Home from "../components/home";
import Toggle from "../components/common/Toggle";
import Computer from "../components/blogs/comp_and_win_basics";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/Thakur-Blogs-Tutorials" element={<Splash />} />
      <Route element={<Toggle />}>
        <Route path="/home" element={<Home />} />
        <Route path="/Computer" element={<Computer />} />
      </Route>
    </Routes>
  );
};

export default Router;
