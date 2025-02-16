import LineBreaks from "./LineBreaks";
import { SectionNodeProps } from "./types";

const VideoSection: React.FC<SectionNodeProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <div className="flex justify-center items-center">{children}</div>
      <LineBreaks num={2} />
    </>
  );
};

export default VideoSection;
