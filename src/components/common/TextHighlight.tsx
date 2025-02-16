import { SectionNodeProps } from "./types";

const TextHighlight: React.FC<SectionNodeProps> = ({
  children,
}): JSX.Element => {
  return <span className="font-playwrite text-base">{children}</span>;
};

export default TextHighlight;
