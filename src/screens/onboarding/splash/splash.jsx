import { useNavigate } from "react-router-dom";

const logo = require("./../../../assets/images/logo.png");

export function Splash() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 2000);

  return (
    <div className="d-flex jcc aic h-100-vh w-100">
      <img src={logo} alt="" />
    </div>
  );
}
