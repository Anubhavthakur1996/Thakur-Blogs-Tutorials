import { useNavigate } from "react-router";
import { Typography, Button } from "antd";
import Conf from "../../../assets/win/confused.png";
import TaskBar from "../../../assets/win/task_bar.png";
import Footer from "../../common/Footer";
import TopicTitleSection from "../../common/TopicTitleSection";
import QuestionSection from "../../common/QuestionSection";
import ImageSection from "../../common/ImageSection";
import AnswerSection from "../../common/AnswerSection";
import LineBreaks from "../../common/LineBreaks";
import ListSection from "../../common/ListSection";
import TextHighlight from "../../common/TextHighlight";

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
      <TopicTitleSection>
        Computer basics including O.S. basics (Windows 11)
      </TopicTitleSection>

      <Typography.Paragraph>
        {/* Operating System */}
        <QuestionSection>What is Windows?</QuestionSection>

        {/* Confused */}
        <ImageSection ImageSrc={Conf} alt="Confused" caption={null} />

        <AnswerSection>
          Windows is an operating system made by Microsoft in 1985. It's been
          one of the most popular operating systems out there. There are many
          iterations of the Windows operating system like Windows XP, Windows
          Vista, and many more but the most recent iteration is called Windows
          11 and this is going to be our focus for this journey.
          <LineBreaks num={2} />
          We will try to quickly go through some crucial components of the
          Windows operating system. I'll try to keep it small and precise as my
          aim is to make you familiar with important components and not to
          overwhelm you with a lot of text and confuse you.
        </AnswerSection>

        {/* Points of Discussion */}
        <ListSection
          title="Following will be the points of discussion:"
          items={["Task Bar", "Start", "Start Menu", "File Explorer"]}
        />

        {/* Task Bar */}
        <QuestionSection>Task Bar?</QuestionSection>
        <AnswerSection>
          The bottom most strip comtaining, Windows button, search and some
          other pinned items is known as{" "}
          <TextHighlight>task bar.</TextHighlight> You can pin your own apps
          that you use often to the task bar, access search, start button and do
          much more.
        </AnswerSection>
        {/* Task Bar Image */}
        <ImageSection
          ImageSrc={TaskBar}
          alt="task_bar"
          caption="Task bar on Windows 11"
        />
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default Windows;
