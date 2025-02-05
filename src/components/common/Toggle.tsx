import { useState } from "react";
import { Space, Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Outlet } from "react-router";
import { userThemeSelector } from "../../utils/utils";

const Toggle: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  if (!theme) {
    const val = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setTheme(val);
  }

  const setVal = (checked: boolean) => {
    const val = checked ? "dark" : "light";
    localStorage.setItem("theme", val);
    setTheme(val);
    userThemeSelector(val);
  };

  return (
    <>
      <Space direction="vertical" className="absolute top-2 right-2">
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          onChange={setVal}
          value={theme === "dark" ? true : false}
        />
      </Space>
      <Outlet />
    </>
  );
};

export default Toggle;
