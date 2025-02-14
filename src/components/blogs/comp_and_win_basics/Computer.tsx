import { useNavigate } from "react-router";
import { Typography, Image, Button } from "antd";
import ComComps from "../../../assets/Computer Comps.png";
import Hardware from "../../../assets/hardware.jpg";
import Software from "../../../assets/software.png";
import Footer from "../../common/Footer";

const Computer: React.FC = (): JSX.Element => {
  const nav = useNavigate();

  const nextPage = () => {
    return (
      <Button type="primary" onClick={() => nav("/os")}>
        Next - Operating Sytem
      </Button>
    );
  };

  const props = {
    prev: null,
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
      {/* Video Summary */}
      <div className="flex justify-center items-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D6WTXmV9N1g?si=J2B0ev6PY_XxU61Z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <br />
      <br />
      {/* Computer */}
      <Typography.Title level={3}>
        <span className="text-typography font-playwriteZA">
          What is a Computer?
        </span>
      </Typography.Title>

      <Typography.Paragraph>
        <Typography.Title keyboard level={4}>
          <span className="text-typography ">
            Any device with computational capabilities and which consists of{" "}
            <span className="font-playwrite text-base">hardware</span> and{" "}
            <span className="font-playwrite text-base">software</span>{" "}
            components. Examples include smartphones, laptops, desktops,
            tablets, and many more day-to-day devices.
          </span>
        </Typography.Title>
        <br />
        <br />
        {/* Computer Image */}
        <div className="flex flex-col justify-center">
          <Image src={ComComps} alt="Computer Components" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite text-lg">
              Figure:
            </span>
            &nbsp;&nbsp;
            <span className="text-typography">
              Computer's two essential components, hardware and software
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
            We touched upon two crucial components of a computer and those were:
            <ol>
              <li>
                <span className="font-playwrite text-lg">Hardware</span>
              </li>
              <li>
                <span className="font-playwrite text-lg">Software</span>
              </li>
            </ol>
          </span>
        </Typography.Title>
        <br />
        <br />
        <br />
        <br />
        {/* Hardware */}
        <Typography.Title level={3}>
          <span className="text-typography font-playwriteZA">
            What is hardware?
          </span>
        </Typography.Title>
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            Hardware in simple terms is part of a computer that can be
            physically touched.
          </span>
        </Typography.Title>
        <br />
        <br />
        {/* Hardware Example */}
        <Typography.Title level={4}>
          <span className="text-typography font-playwrite">Examples:</span>
          <Typography.Title keyboard level={4}>
            <span className="text-typography">
              Cabinet, Motherboard, RAM, and Monitor are some examples.
            </span>
          </Typography.Title>
        </Typography.Title>
        <br />
        <br />
        {/* Hardware Image */}
        <div className="flex flex-col justify-center">
          <Image src={Hardware} alt="Computer Hardware" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite text-lg">
              Figure:
            </span>
            &nbsp;&nbsp;
            <span className="text-typography">
              Some examples of computer hardware
            </span>
          </Typography.Title>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Software */}
        <Typography.Title level={3}>
          <span className="text-typography font-playwriteZA">
            What is software?
          </span>
        </Typography.Title>
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            Software is the part of a computer or a computational device that
            can not be touched but can be seen.
          </span>
        </Typography.Title>
        <br />
        <br />
        {/* Software Example */}
        <Typography.Title level={4}>
          <span className="text-typography font-playwrite">Examples:</span>
          <Typography.Title keyboard level={4}>
            <span className="text-typography">
              Windows OS, Mac OS, MS Office, Games, etc.
            </span>
          </Typography.Title>
        </Typography.Title>
        <br />
        <br />
        {/* Software Image */}
        <div className="flex flex-col justify-center">
          <Image src={Software} alt="Computer Software" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite text-lg">
              Figure:
            </span>
            &nbsp;&nbsp;
            <span className="text-typography">
              Some examples of computer software
            </span>
          </Typography.Title>
        </div>
        <br />
        <br />
        {/* What's next? */}
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            Next, we will discuss one such software called an operating system.
            It's one of the most crucial pieces of software out there and one
            that I am sure all of you have already come in contact with. That is
            all for this page, let's meet on the next one.
          </span>
        </Typography.Title>
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default Computer;
