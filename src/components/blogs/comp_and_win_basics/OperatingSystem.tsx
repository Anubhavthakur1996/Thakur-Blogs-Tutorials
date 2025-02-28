import { useNavigate } from "react-router";
import { Typography, Button } from "antd";
import OS from "../../../assets/OS/os.png";
import Footer from "../../common/Footer";
import VideoSection from "../../common/VideoSection";
import TopicTitleSection from "../../common/TopicTitleSection";
import QuestionSection from "../../common/QuestionSection";
import AnswerSection from "../../common/AnswerSection";
import ExampleSection from "../../common/ExampleSection";
import ImageSection from "../../common/ImageSection";
import ListSection from "../../common/ListSection";
import LineBreaks from "../../common/LineBreaks";

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
      <TopicTitleSection>
        Computer basics including O.S. basics (Windows 11)
      </TopicTitleSection>

      {/* Video Summary */}
      <VideoSection>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rPO1k-2tA60?si=jmb51CHI-vfbqXNQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </VideoSection>

      <Typography.Paragraph>
        {/* Operating System */}
        <QuestionSection>What the heck is an Operating System?</QuestionSection>

        {/* OS Exaplanation */}
        <AnswerSection>
          If we interpret the name itself, we can deduce that anything that
          operates a system is an Operating system. In the context of computers,
          an Operating System is software that manages a set piece of hardware;
          in the case of personal computers, it is responsible for making
          computer hardware operational.
        </AnswerSection>

        {/* OS Examples */}
        <ExampleSection>
          Windows, MacOS, Android, and IOS are some examples.
        </ExampleSection>

        {/* OS Image */}
        <ImageSection
          ImageSrc={OS}
          alt="Operating Systems"
          caption="Some popular operating systems"
        />

        {/* OS Types */}
        <ListSection
          title="There are many types of operating systems:"
          items={[
            "Batch OS",
            "Multi-programming OS",
            "Multi-tasking/Time sharing OS",
            "Multi-processing OS",
            "Multi-user OS",
            "Distributed OS",
            "Network OS",
            "Real time OS",
            "Mobile OS",
          ]}
        />

        {/* Modern OS */}

        <QuestionSection>Moderm Operating Systems:</QuestionSection>

        <AnswerSection>
          Modern operating systems are usually a hybrid combination of
          multi-programming, multitasking, multi-processing, and multi-user
          operating systems. It can be inferred because modern operating systems
          like Windows or Mac have capabilities of the aforementioned operating
          systems.
        </AnswerSection>

        {/* Our Focus */}
        <QuestionSection>Our Focus?</QuestionSection>
        <AnswerSection>
          We will only focus on the Windows operating system as this tutorial
          was made for people who want to get a somewhat advanced understanding
          of the core features of operating systems and want to move into tech
          and programming. We will also touch upon NOS and mobile operating
          systems as their basic understanding is crucial to walk the path of
          modern tech and development.
        </AnswerSection>

        {/* Next  */}
        <QuestionSection>Coming Up...</QuestionSection>
        <AnswerSection>
          Next, we will focus on interfaces and how we can get things done via
          computers. To use a computational device we need a mediium and that's
          what interfaces are. You can look it up on the internet to have a
          light understanding of the topip before moving forward. That'll be all
          for this topic, and i'll see you on next page.
        </AnswerSection>

        {/* Read more */}
        <Typography.Link
          target="_blank"
          href="https://www.geeksforgeeks.org/types-of-operating-systems/"
        >
          Read about operating systems in more details
        </Typography.Link>

        <LineBreaks num={2} />
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default OperatingSystem;
