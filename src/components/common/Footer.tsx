import { Button } from "antd";

type FooterProps = {
  prev: null | (() => JSX.Element);
  next: null | (() => JSX.Element);
};

const Footer: React.FC<FooterProps> = ({ prev, next }): JSX.Element => {
  return (
    <div className="flex justify-between align-middle">
      {prev ? prev() : <Button className="invisible">{null}</Button>}
      {next && next()}
    </div>
  );
};

export default Footer;
