import Logo from "./logo.png";
import Waves from "../components/Waves";
import "./Introduction.style.scss";
import bg from "../../public/assets/background.webp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AudioPlayer from "../../public/audio/audio";
const Landing = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("hellox");
    navigate(`/events`);
  };

  return (
    <div className="introduction">
     
      <img
        className="logo"
        alt="Harry Potter Logo"
        src={Logo}
        width={200}
        height={200}
      />
      <div className="introduction__title">
        Department of Computer Science and Engineering presents
        <br /> A National Level Technical Symposium:
        <br /> Xplore 2k23
      </div>
      <div className="buttoncont">
        <button className="btn btn-3" onClick={clickHandler}>
          <p>Explore Events &rarr;</p>
        </button>
      </div>
      <AudioPlayer/>
    </div>
  );
};

export default Landing;
