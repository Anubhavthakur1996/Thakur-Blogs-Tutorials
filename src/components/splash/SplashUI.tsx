type SplashProps = {
  Logo: string;
};

const SplashUI: React.FC<SplashProps> = ({ Logo }): JSX.Element => (
  <div className="flex justify-center items-center h-screen">
    <img src={Logo} className="animate-wiggle h-[20vw]" />
  </div>
);

export default SplashUI;
