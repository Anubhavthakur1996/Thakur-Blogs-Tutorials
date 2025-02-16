import { Typography, Image } from "antd";
import LineBreaks from "./LineBreaks";

type ImageSectionProps = {
  ImageSrc: string;
  alt: string;
  caption: string;
};

const ImageSection: React.FC<ImageSectionProps> = ({
  ImageSrc,
  alt,
  caption,
}): JSX.Element => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Image src={ImageSrc} alt={alt} width={"45vw"} />
        <Typography.Title level={4}>
          <span className="text-typography font-playwrite text-lg">
            Figure:
          </span>
          &nbsp;&nbsp;
          <span className="text-typography">{caption}</span>
        </Typography.Title>
      </div>
      <LineBreaks num={4} />
    </>
  );
};

export default ImageSection;
