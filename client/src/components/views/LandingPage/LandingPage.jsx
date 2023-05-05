import "./LandingPage.css";
import start from "../../../img/buttonStar.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="capsula">
        <div className="div-frase">
          <p>
            Welcome to PokeXavi! my Pokémon themed website for the Individual
            Project stage! I hope you find everything you are looking for. At
            this website, you will find a lot of information about the world of
            Pokémon. You will also be able to create your own Pokémon teams,
            train them, and battle with other trainers from the community. Thank
            you for visiting us, we hope you enjoy browsing our website! Let's
            get started, choose your starter Pokémon and let's begin our journey
            together. Made by Xavier Montero with ❤️.
          </p>
        </div>
        <div className="div-img">
          <Link to="/home">
            <img className="start-button" src={start} alt="" />
          </Link>
        </div>
        <div className="div-titulo">
          <div>
            <h1>Proyecto</h1>
            <h1>Individual</h1>
            <h1>Henry</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
