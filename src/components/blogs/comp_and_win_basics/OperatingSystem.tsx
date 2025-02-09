import { useNavigate } from "react-router";
import { Typography, Image, Button } from "antd";
import OS from "../../../assets/os.png";
import Footer from "../../common/Footer";

const OperatingSystem: React.FC = (): JSX.Element => {
  const nav = useNavigate();

  const nextPage = () => {
    return (
      <Button type="primary" onClick={() => nav("/ui")}>
        Next - User Interface
      </Button>
    );
  };

  const prevPage = () => {
    return (
      <Button type="primary" onClick={() => nav("/computer")}>
        Back - Computer
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
          What the heck is an Operating System?
        </span>
      </Typography.Title>

      <Typography.Paragraph>
        <Typography.Title keyboard level={4}>
          <span className="text-typography ">
            If we interpret the name itself, we can deduce that anything that
            operates a system is an Operating system. In the context of
            computers, an Operating System is software that manages a set piece
            of hardware; in the case of personal computers, it is responsible
            for making computer hardware operational.
          </span>
        </Typography.Title>
        {/* OS Examples */}
        <Typography.Title level={4}>
          <span className="text-typography font-playwrite">Examples:</span>
          <Typography.Title keyboard level={4}>
            <span className="text-typography">
              Windows, MacOS, Android, and IOS are some examples.
            </span>
          </Typography.Title>
        </Typography.Title>
        <br />
        <br />
        {/* Computer Image */}
        <div className="flex flex-col justify-center">
          <Image src={OS} alt="Operating Systems" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite text-lg">
              Figure:
            </span>
            &nbsp;&nbsp;
            <span className="text-typography">
              Some popular operating systems
            </span>
          </Typography.Title>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* H/W & S/W */}
        <Typography.Title level={4}>
          <span className="text-typography">
            There are many types of operating systems:
            <ol>
              <li>
                <span className="font-playwrite text-base">Batch OS</span>
              </li>
              <li>
                <span className="font-playwrite text-base">
                  Multi-programming OS
                </span>
              </li>
              <li>
                <span className="font-playwrite text-base">
                  Multi-tasking/Time sharing OS
                </span>
              </li>
              <li>
                <span className="font-playwrite text-base">
                  Multi-processing OS
                </span>
              </li>
              <li>
                <span className="font-playwrite text-base">Multi-user OS</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Distributed OS</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Network OS</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Real time OS</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Mobile OS</span>
              </li>
            </ol>
          </span>
        </Typography.Title>
        <br />
        <br />
        <br />
        <br />
        {/* Hardware */}
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            Modern operating systems are usually a hybrid combination of
            multi-programming, multitasking, multi-processing, and multi-user
            operating systems. It can be inferred because modern operating
            systems like Windows or Mac have capabilities of the aforementioned
            operating systems.
          </span>
        </Typography.Title>
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            We will only focus on the Windows operating system as this tutorial
            was made for people who want to get a somewhat advanced
            understanding of the core features of operating systems and want to
            move into tech and programming. We will also touch upon NOS and
            mobile operating systems as their basic understanding is crucial to
            walk the path of modern tech and development.
          </span>
        </Typography.Title>

        <br />
        <br />

        <Typography.Link
          target="_blank"
          href="https://www.geeksforgeeks.org/types-of-operating-systems/"
        >
          Read about operating systems in more details
        </Typography.Link>

        <br />
        <br />
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default OperatingSystem;
