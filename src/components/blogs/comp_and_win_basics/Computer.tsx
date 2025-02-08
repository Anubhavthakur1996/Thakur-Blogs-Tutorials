import { Typography, Image } from "antd";
import ComComps from "../../../assets/Computer Comps.png";
import Hardware from "../../../assets/hardware.jpg";
import Software from "../../../assets/software.png";

const Computer: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-screen min-h-screen max-h-max px-90">
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
            <span className="font-playwrite">hardware</span> and{" "}
            <span className="font-playwrite">software</span> components.
            Examples include smartphones, laptops, desktops, tablets, and many
            more day-to-day devices.
          </span>
        </Typography.Title>
        <br />
        <br />
        <br />
        <br />
        {/* Computer Image */}
        <div className="flex justify-center">
          <Image src={ComComps} alt="Computer Components" width={"55vw"} />
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
                <span className="font-playwrite">Hardware</span>
              </li>
              <li>
                <span className="font-playwrite">Software</span>
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
        <br />
        <br />
        {/* Hardware Image */}
        <div className="flex justify-center">
          <Image src={Hardware} alt="Computer Hardware" width={"55vw"} />
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
        <br />
        <br />
        {/* Software Image */}
        <div className="flex justify-center">
          <Image src={Software} alt="Computer Software" width={"55vw"} />
        </div>
        {/* <br />
        <br />
        <br />
        <br /> */}
      </Typography.Paragraph>
    </div>
  );
};

export default Computer;
