import { useNavigate } from "react-router";
import HomeUI from "./HomeUI";
import Logo from "../../assets/BlogsLogo.png";

const Home: React.FC = (): JSX.Element => {
  const nav = useNavigate();

  const goTo = (path: string) => {
    void nav(path);
  };

  const props = {
    goTo,
    Logo,
  };

  return <HomeUI {...props} />;
};

export default Home;
