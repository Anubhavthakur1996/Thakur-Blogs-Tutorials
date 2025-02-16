import { useNavigate } from "react-router";
import { Typography, Button } from "antd";
import UserInt from "../../../assets/UI.png";
import CLI from "../../../assets/cli gif.gif";
import GUI from "../../../assets/gui gif.gif";
import Footer from "../../common/Footer";
import TopicTitleSection from "../../common/TopicTitleSection";
import QuestionSection from "../../common/QuestionSection";
import AnswerSection from "../../common/AnswerSection";
import LineBreaks from "../../common/LineBreaks";
import ImageSection from "../../common/ImageSection";
import ListSection from "../../common/ListSection";
import ExampleSection from "../../common/ExampleSection";
import TextHighlight from "../../common/TextHighlight";

const UI: React.FC = (): JSX.Element => {
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
      <Button type="primary" onClick={() => nav("/os")}>
        Back - Operating System
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
      {/* Tutorial Title */}
      <TopicTitleSection>
        Computer basics including O.S. basics (Windows 11)
      </TopicTitleSection>

      <Typography.Paragraph>
        {/* User Interface */}
        <QuestionSection>User interface?</QuestionSection>

        {/* Ui Explanation */}
        <AnswerSection>
          Based on the name, we can deduce that a user interface is a bridge
          between the user and something. In the computer's context, a user
          interface is a bridge between the user and the computer.{" "}
          <LineBreaks num={2} />
          You must be asking, what do you mean by a bridge? And why do you need
          a bridge between the user and the computer? <LineBreaks num={1} />
          The answer is to provide means to take the user's inputs and give them
          to the computer and take the output from the computer and deliver it
          to the user.
        </AnswerSection>

        {/* UI Image */}
        <ImageSection
          ImageSrc={UserInt}
          alt="User Interface"
          caption="User interface designs"
        />

        {/* CLI & GUI*/}
        <ListSection
          title="There are two primary types of user interfaces:"
          items={[
            "Command Line Interface (CLI).",
            "Graphical User Interface (GUI).",
          ]}
        />

        {/* CLI */}
        <QuestionSection>1) Command Line Interface (CLI):</QuestionSection>
        <AnswerSection>
          A command line interface is one where the user interacts with the
          computer through commands hence, the name command line interface. When
          using a command line interface user, inputs commands using a keyboard
          into a <span className="font-playwrite text-base">shell</span>, and
          based on the commands entered, the computer displays output on the
          monitor.
        </AnswerSection>

        {/* CLI Examples */}
        <ExampleSection>
          DOS is an example of an OS that uses CLI, Windows command prompt (cmd)
          is a CLI, Linux bash is a CLI and there are many more.
        </ExampleSection>

        {/* CLI Image */}
        <ImageSection
          ImageSrc={CLI}
          alt="Command Line Interface"
          caption="A coomand line interface"
        />

        {/* GUI */}
        <QuestionSection>2) Graphical User Interface (GUI):</QuestionSection>
        <AnswerSection>
          A graphical user interface is one where the user interacts with the
          computer using visuals, graphics, and a wide variety of means not just
          commands. The user may click on things, drag and drop them,
          double-click them, and do a lot more than just write commands into a
          shell.
        </AnswerSection>

        {/* GUI Examples */}
        <ExampleSection>
          Windows OS interface, Mac OS interface, and Ubuntu OS interface are
          some examples.
        </ExampleSection>

        {/* GUI Image */}
        <ImageSection
          ImageSrc={GUI}
          alt="Graphical User Interface"
          caption="A graphical user interface"
        />

        {/* Shell */}
        <QuestionSection>Shell?</QuestionSection>
        <AnswerSection>
          We talked about <TextHighlight>shell</TextHighlight> while readin
          about CLI. Since, then you might be wondering what kind of a new pain
          is this? So to fix that, let me give it to you in plain words. A{" "}
          <TextHighlight>shell</TextHighlight> is a plain text like interface.
          By now you should know what an interface is but if you still need to
          know more, you can do some personal research or let me know through
          comments on my video and I'll make a seperate article and video about
          it.
        </AnswerSection>

        {/* Next  */}
        <QuestionSection>Coming Up...</QuestionSection>
        <AnswerSection>
          Next, we will move on to windows 11, our main focus of this whole
          series. We will now what a winows OS is and what are it's main
          components. As, always, you can do some homework and look it up before
          moving forward but we'll stop here for now. See you on the next page.
        </AnswerSection>
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default UI;
