type VideoSectionTypes = {
  children: React.ReactNode;
};

const VideoSection: React.FC<VideoSectionTypes> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <div className="flex justify-center items-center">{children}</div>
      <br />
      <br />
    </>
  );
};

export default VideoSection;
