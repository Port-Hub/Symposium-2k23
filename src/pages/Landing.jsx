import Logo from "./logo.png";
import Waves from "../components/Waves";
// import "./Introduction.style.scss";
import "./Landing.css";
import bg from "../../public/assets/background.webp";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  const clickhandler = () => {
    console.log("hellox");
    navigate("/events");
  };
  return (
    <div className="introduction">
      <Waves />
      <img
        className="logo"
        alt="Harry Potter Logo"
        src={Logo}
        width={200}
        height={200}
      />
      <h1 className="introduction__title">
        Department of Computer Science and Engineering presents
        <br /> national level Technical symposium
        <br /> Xplore 2k23
      </h1>
      <div className="buttoncont">
        <button className="btn btn-3" onClick={clickhandler}>
          <p>Explore Events &rarr;</p>
        </button>
      </div>
    </div>
  );
};

export default Landing;
