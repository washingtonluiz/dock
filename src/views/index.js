import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

//CSS
import "./index.css";

//Images
import ImageProfile from "../images/image-profile.jpg";
import BgProfile from "../images/bg-profile.jpg";

function Index() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-8 mt-5">
        <div className="card profile-card">
          <div className="card-img-block">
            <img className="img-fluid" src={BgProfile} alt="Card image cap" />
          </div>
          <div className="card-body pt-5">
            <img src={ImageProfile} alt="profile-image" className="profile" />
            <h5 className="card-title ">Washington Luiz</h5>
            <p className="card-text">
              Apaixonado pela área da tecnologia, com foco no desenvolvimento
              front-end nas tecnologias em crescimento exponencial como React,
              NodeJS e React Native, sempre em busca de novos aprendizados e
              conhecimentos.
            </p>
            <div className="icon-block">
              <a
                href="https://www.facebook.com/washington.ton81"
                title="Facebook"
                alt="Facebook"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/washingtonluiz81/"
                title="Instagram"
                alt="Instagram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/washington-luiz-de-souza-1a930868/"
                title="Linkedin"
                alt="Linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
