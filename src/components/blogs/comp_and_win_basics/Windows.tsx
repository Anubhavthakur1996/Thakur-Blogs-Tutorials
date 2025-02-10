import { useNavigate } from "react-router";
import { Typography, Image, Button } from "antd";
import Conf from "../../../assets/confused.png";
import Footer from "../../common/Footer";

const Windows: React.FC = (): JSX.Element => {
  const nav = useNavigate();

  const nextPage = () => {
    return (
      <Button type="primary" onClick={() => nav("/windows")}>
        Next - Windows 11
      </Button>
    );
  };

  const prevPage = () => {
    return (
      <Button type="primary" onClick={() => nav("/ui")}>
        Back - User Interface
      </Button>
    );
  };

  const props = {
    prev: prevPage,
    next: nextPage,
  };

  return (
    <div className="max-w-screen min-h-screen max-h-max 2xl:px-[25vw] px-[5vw] py-[10vw] overflow-y-auto">
      {/* Tutorial Title */}
      <Typography.Title code className="flex justify-center">
        <span className="text-typography">
          Computer basics including O.S. basics (Windows 11)
        </span>
      </Typography.Title>
      <br />
      <br />
      <br />
      <br />
      {/* Operating System */}
      <Typography.Title level={3}>
        <span className="text-typography font-playwriteZA">
          What is Windows?
        </span>
      </Typography.Title>

      {/* Confused */}
      <div className="flex flex-col justify-center">
        <Image src={Conf} alt="Confused" width={"45vw"} />
      </div>
      <br />
      <br />
      <Typography.Paragraph>
        <Typography.Title keyboard level={4}>
          <span className="text-typography ">
            Windows is an operating system made by Microsoft in 1985. It's been
            one of the most popular operating systems out there. There are many
            iterations of the Windows operating system like Windows XP, Windows
            Vista, and many more but the most recent iteration is called Windows
            11 and this is going to be our focus for this journey.
          </span>
        </Typography.Title>

        <Typography.Title keyboard level={4}>
          <span className="text-typography ">
            We will try to quickly go through some crucial components of the
            Windows operating system. I'll try to keep it small and precise as
            my aim is to make you familiar with important components and not to
            overwhelm you with a lot of text and confuse you.
          </span>
        </Typography.Title>

        <br />
        <br />
        <Typography.Title level={4}>
          <span className="text-typography">
            Following will be the points of discussion:
            <ol type="1">
              <li>
                <span className="font-playwrite text-base">Start</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Start menu</span>
              </li>
              <li>
                <span className="font-playwrite text-base">File explorer</span>
                <ul>
                  {/* <li className="font-playwrite text-base">Structure</li> */}
                  <li className="font-playwrite text-base">Address bar</li>
                  <li className="font-playwrite text-base">Navigation pane</li>
                </ul>
              </li>
            </ol>
          </span>
        </Typography.Title>

        <br />
        <br />

        {/* <Typography.Link
          target="_blank"
          href="https://www.geeksforgeeks.org/types-of-operating-systems/"
        >
          Read about operating systems in more details
        </Typography.Link>

        <br />
        <br /> */}
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default Windows;
