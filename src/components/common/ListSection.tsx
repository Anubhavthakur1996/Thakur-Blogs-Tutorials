import { Typography } from "antd";
import LineBreaks from "./LineBreaks";
import { Key } from "react";

type ListSectionProps = {
  title: string;
  items: string[];
};

const ListSection: React.FC<ListSectionProps> = ({
  title,
  items,
}): JSX.Element => {
  return (
    <>
      <Typography.Title level={4}>
        <span className="text-typography">
          {title}
          <ol>
            {items?.map(
              (
                val: string | null | undefined,
                index: Key | null | undefined
              ) => (
                <li key={index}>
                  <span className="font-playwrite text-base">{val}</span>
                </li>
              )
            )}
          </ol>
        </span>
      </Typography.Title>
      <LineBreaks num={2} />
    </>
  );
};

export default ListSection;
