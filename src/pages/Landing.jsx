import Logo from "./logo.png";
import Waves from "../components/Waves";
import "./Landing.css";
import bg from "../../public/assets/background.webp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("hellox");
    navigate(`/events`);
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
      <div className="introduction__title">
        Department of Computer Science and Engineering presents
        <br /> A National level technical symposium
        <br /> Xplore 2k23
      </div>
      <div className="explore">
        <a href="/events" className="btn-explore">
          <p>Explore Events &rarr;</p>
        </a>
      </div>
    </div>
  );
};

export default Landing;
