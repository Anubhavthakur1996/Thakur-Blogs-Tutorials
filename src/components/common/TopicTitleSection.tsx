import { Typography } from "antd";
import { SectionTextProps } from "./types";
import LineBreaks from "./LineBreaks";

const TopicTitleSection: React.FC<SectionTextProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <Typography.Title code className="flex justify-center">
        <span className="text-typography">{children}</span>
      </Typography.Title>
      <LineBreaks num={4} />
    </>
  );
};

export default TopicTitleSection;
