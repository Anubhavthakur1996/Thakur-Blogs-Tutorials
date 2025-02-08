import { Typography } from "antd";

type HomeUIProps = {
  goTo: (path: string) => void;
  Logo: string;
};

const HomeUI: React.FC<HomeUIProps> = ({ goTo, Logo }): JSX.Element => (
  <div className="flex flex-col p-[5vh] justify-center items-center h-screen">
    <img src={Logo} className="animate-bounce 2xl:h-[20vw] h-[20vh]" />
    <Typography.Title>
      <span className="text-typography">List of Blogs & Tutorials:</span>
    </Typography.Title>
    <Typography.Paragraph>
      <span className="text-typography">
        <ul>
          <li
            id="/computer"
            onClick={(e) => {
              goTo(e?.currentTarget?.id);
            }}
          >
            <Typography.Link>
              Computer and Operating System Basics
            </Typography.Link>
          </li>
        </ul>
      </span>
    </Typography.Paragraph>
  </div>
);

export default HomeUI;
