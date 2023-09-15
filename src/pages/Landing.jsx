import Logo from "./logo.png";
import "./Introduction.style.scss";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../../public/audio/audio";

import Sponsor1 from "../assets/sponsor11.png";
import Sponsor2 from "../assets/sponsor22.png";

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
        <button className="btn btn-secondary" onClick={clickHandler}>
          <p>Explore Events &rarr;</p>
        </button>
      </div>
      <div className="Sponsor">
        <div className="sponsor1">
          Title Sponsor:<br></br>
          <img
            src={Sponsor1}
            width="100px"
            height="60px"
          ></img>
        </div>
        <div className="sponsor1">
          Associate Sponsors:<br></br>
          <img
            src={Sponsor2}
            width="200px"
            height="55px"
          ></img>
        </div>
      </div>

      <AudioPlayer />
    </div>
  );
};

export default Landing;
