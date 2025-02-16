import { Typography } from "antd";
import { SectionTextProps } from "./types";

const QuestionSection: React.FC<SectionTextProps> = ({children}): JSX.Element => {
  return (
    <Typography.Title level={3}>
      <span className="text-typography font-playwriteZA">
        {children}
      </span>
    </Typography.Title>
  );
};

export default QuestionSection;
