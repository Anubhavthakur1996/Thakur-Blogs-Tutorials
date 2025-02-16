import { Typography } from "antd";
import { SectionNodeProps } from "./types";
import LineBreaks from "./LineBreaks";

const AnswerSection: React.FC<SectionNodeProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <Typography.Title keyboard level={4}>
        <span className="text-typography ">{children}</span>
      </Typography.Title>
      <LineBreaks num={2} />
    </>
  );
};

export default AnswerSection;
