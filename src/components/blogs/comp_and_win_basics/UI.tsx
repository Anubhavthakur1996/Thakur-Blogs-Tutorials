import { useNavigate } from "react-router";
import { Typography, Image, Button } from "antd";
import UserInt from "../../../assets/UI.png";
import CLI from "../../../assets/cli gif.gif";
import GUI from "../../../assets/gui gif.gif";
import Footer from "../../common/Footer";

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
      <Typography.Title code className="flex justify-center">
        <span className="text-typography">
          Computer basics including O.S. basics (Windows 11)
        </span>
      </Typography.Title>
      <br />
      <br />
      <br />
      <br />
      {/* User Interface */}
      <Typography.Title level={3}>
        <span className="text-typography font-playwriteZA">
          User interface?
        </span>
      </Typography.Title>

      <Typography.Paragraph>
        <Typography.Title keyboard level={4}>
          <span className="text-typography ">
            Based on the name, we can deduce that a user interface is a bridge
            between the user and something. In the computer's context, a user
            interface is a bridge between the user and the computer. <br />
            <br />
            You must be asking, what do you mean by a bridge? And why do you
            need a bridge between the user and the computer? <br />
            The answer is to provide means to take the user's inputs and give
            them to the computer and take the output from the computer and
            deliver it to the user.
          </span>
        </Typography.Title>
        <br />
        <br />

        {/* UI Image */}
        <div className="flex flex-col justify-center">
          <Image src={UserInt} alt="User Interface" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite">Figure:</span>
            &nbsp;&nbsp;
            <span className="text-typography">User interface designs</span>
          </Typography.Title>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* CLI & GUI*/}
        <Typography.Title level={4}>
          <span className="text-typography">
            There are two primary types of user interfaces:
            <ol>
              <li>
                <span className="font-playwrite text-base">
                  Command Line Interface (CLI).
                </span>
              </li>
              <li>
                <span className="font-playwrite text-base">
                  Graphical User Interface (GUI).
                </span>
              </li>
            </ol>
          </span>
        </Typography.Title>
        <br />
        <br />
        <br />
        <br />
        {/* CLI */}
        <Typography.Title level={3}>
          <span className="text-typography font-playwrite">
            1) Command Line Interface (CLI):
          </span>
        </Typography.Title>
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            A command line interface is one where the user interacts with the
            computer through commands hence, the name command line interface.
            When using a command line interface user, inputs commands using a
            keyboard into a{" "}
            <span className="font-playwrite text-base">shell</span>, and based
            on the commands entered, the computer displays output on the
            monitor.
          </span>
        </Typography.Title>
        {/* CLI Examples */}
        <Typography.Title level={4}>
          <span className="text-typography font-playwrite">Examples:</span>
          <Typography.Title keyboard level={4}>
            <span className="text-typography">
              DOS is an example of an OS that uses CLI, Windows command prompt
              (cmd) is a CLI, Linux bash is a CLI and there are many more.
            </span>
          </Typography.Title>
        </Typography.Title>
        <br />
        <br />

        {/* CLI Image */}
        <div className="flex flex-col justify-center">
          <Image src={CLI} alt="Command Line Interface" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite text-lg">
              Figure:
            </span>
            &nbsp;&nbsp;
            <span className="text-typography">A coomand line interface</span>
          </Typography.Title>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* GUI */}
        <Typography.Title level={3}>
          <span className="text-typography font-playwrite">
            2) Graphical User Interface (GUI):
          </span>
        </Typography.Title>
        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            A graphical user interface is one where the user interacts with the
            computer using visuals, graphics, and a wide variety of means not
            just commands. The user may click on things, drag and drop them,
            double-click them, and do a lot more than just write commands into a
            shell.
          </span>
        </Typography.Title>
        {/* GUI Examples */}
        <Typography.Title level={4}>
          <span className="text-typography font-playwrite">Examples:</span>
          <Typography.Title keyboard level={4}>
            <span className="text-typography">
              Windows OS interface, Mac OS interface, and Ubuntu OS interface
              are some examples.
            </span>
          </Typography.Title>
        </Typography.Title>
        {/* GUI Image */}
        <br />
        <br />

        <div className="flex flex-col justify-center">
          <Image src={GUI} alt="Graphical User Interface" width={"45vw"} />
          <Typography.Title level={4}>
            <span className="text-typography font-playwrite">Figure:</span>
            &nbsp;&nbsp;
            <span className="text-typography">A graphical user interface</span>
          </Typography.Title>
        </div>
        <br />
        <br />
        <br />
        <br />

        {/* Common Terms */}
        <Typography.Title level={4}>
          <span className="text-typography">
            Some terms that we have already touched or will touch in the future:
            <ol>
              <li>
                <span className="font-playwrite text-base">Shell.</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Start.</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Start menu.</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Task bar.</span>
              </li>
              <li>
                <span className="font-playwrite text-base">Address bar.</span>
              </li>
            </ol>
          </span>
        </Typography.Title>

        <Typography.Title keyboard level={4}>
          <span className="text-typography">
            We will discuss them in enough detail, but you can look them up
            yourself, think of it as a small assignment.
          </span>
        </Typography.Title>

        <br />
        <br />

        {/* <Typography.Link
          target="_blank"
          href="https://www.geeksforgeeks.org/types-of-operating-systems/"
        >
          Read about operating systems in more details
        </Typography.Link> */}

        <br />
        <br />
      </Typography.Paragraph>
      <Footer {...props} />
    </div>
  );
};

export default UI;
