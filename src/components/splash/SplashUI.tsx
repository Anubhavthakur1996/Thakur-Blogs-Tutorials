type SplashProps = {
  Logo: string;
};

const SplashUI: React.FC<SplashProps> = ({ Logo }): JSX.Element => (
  <img src={Logo} className="animate-bounce h-96" />
);

export default SplashUI;
