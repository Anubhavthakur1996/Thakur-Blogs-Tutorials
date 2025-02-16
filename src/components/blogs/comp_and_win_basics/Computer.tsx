import { useNavigate } from "react-router";
import { Typography, Image, Button } from "antd";
import ComComps from "../../../assets/Computer Comps.png";
import Hardware from "../../../assets/hardware.jpg";
import Software from "../../../assets/software.png";
import Footer from "../../common/Footer";
import VideoSection from "../../common/VideoSection";
import TopicTitleSection from "../../common/TopicTitleSection";
import QuestionSection from "../../common/QuestionSection";
import AnswerSection from "../../common/AnswerSection";
import TextHighlight from "../../common/TextHighlight";
import ImageSection from "../../common/ImageSection";
import LineBreaks from "../../common/LineBreaks";
import ExampleSection from "../../common/ExampleSection";

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
      <TopicTitleSection children="Computer basics including O.S. basics (Windows 11)" />

      {/* Video Summary */}
      <VideoSection>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iH_TCGz1bdA?si=9Ufc20h24AeV0eoX"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </VideoSection>

      <Typography.Paragraph>
        {/* Computer ? */}
        <QuestionSection children="What is a Computer?" />

        {/* Computer Explanation */}
        <AnswerSection>
          Any device with computational capabilities and which consists of{" "}
          <TextHighlight>hardware</TextHighlight> and{" "}
          <TextHighlight>software</TextHighlight> components. Examples include
          smartphones, laptops, desktops, tablets, and many more day-to-day
          devices.
        </AnswerSection>

        {/* Computer Image */}
        <ImageSection
          ImageSrc={ComComps}
          alt="Computer Components"
          caption="Computer's two essential components, hardware and software"
        />

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
        <LineBreaks num={2} />

        {/* Hardware */}
        <QuestionSection children="What is hardware?" />
        {/* Hardware Explanation */}
        <AnswerSection>
          Hardware in simple terms is part of a computer that can be physically
          touched.
        </AnswerSection>

        {/* Hardware Example */}
        <ExampleSection>
          Cabinet, Motherboard, RAM, and Monitor are some examples.
        </ExampleSection>

        {/* Hardware Image */}
        <ImageSection
          ImageSrc={Hardware}
          alt="Computer Hardware"
          caption="Some examples of computer hardware"
        />

        {/* Software */}
        <QuestionSection children="What is software?" />
        <AnswerSection>
          Software is the part of a computer or a computational device that can
          not be touched but can be seen.
        </AnswerSection>

        {/* Software Example */}
        <ExampleSection>
          Windows OS, Mac OS, MS Office, Games, etc.
        </ExampleSection>

        {/* Software Image */}
        <ImageSection
          ImageSrc={Software}
          alt="Computer Software"
          caption="Some examples of computer software"
        />

        {/* What's next? */}
        <QuestionSection>Coming Up...</QuestionSection>
        <AnswerSection>
          Next, we will discuss one such software called an operating system.
          It's one of the most crucial pieces of software out there and one that
          I am sure all of you have already come in contact with. That is all
          for this page, let's meet on the next one.
        </AnswerSection>
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default Computer;
