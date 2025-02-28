import { Typography } from "antd";
import LineBreaks from "./LineBreaks";
import { SectionNodeProps } from "./types";

const ExampleSection: React.FC<SectionNodeProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <Typography.Title level={4}>
        <span className="text-typography font-playwrite">Examples:</span>
        <Typography.Title level={4}>
          <span className="text-typography">{children}</span>
        </Typography.Title>
      </Typography.Title>
      <LineBreaks num={2} />
    </>
  );
};

export default ExampleSection;
