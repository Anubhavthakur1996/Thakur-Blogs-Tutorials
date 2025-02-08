import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Splash from "../components/splash";
import Home from "../components/home";
import Toggle from "../components/common/Toggle";
import Computer from "../components/blogs/comp_and_win_basics";
import OperatingSystem from "../components/blogs/comp_and_win_basics/OperatingSystem";

import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const Router: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Routes>
        <Route path="Thakur-Blogs-Tutorials" element={<Splash />} />
        <Route element={<Toggle />}>
          <Route path="home" element={<Home />} />
          <Route path="Computer" element={<Computer />} />
          <Route path="OS" element={<OperatingSystem />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};

export default Router;
