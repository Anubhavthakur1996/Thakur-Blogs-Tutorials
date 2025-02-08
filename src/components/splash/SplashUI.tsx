type SplashProps = {
  Logo: string;
};

const SplashUI: React.FC<SplashProps> = ({ Logo }): JSX.Element => (
  <div className="flex justify-center items-center h-screen">
    <img src={Logo} className="animate-wiggle 2xl:h-[20vw] h-[20vh]" />
  </div>
);

export default SplashUI;
