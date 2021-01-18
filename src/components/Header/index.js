import React from "react";
import { NavLink } from "react-router-dom";

//Images
import Logo from "../../images/logo-mobile.svg";
import Homepage from "../../images/icon-homepage.svg";

//CSS
import "./index.css";

function Header({ changeTheme, nameTheme }) {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li
            className="logo"
            alt="Voltar para a home"
            title="Voltar para a home"
          >
            <NavLink to="/" className="nav-link">
              <span className="link-text logo-text">
                <img src={Logo} alt="Dock" title="Dock" />
              </span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </NavLink>
          </li>

          <li className="nav-item homepage">
            <NavLink to="/" className="nav-link" activeClassName="active-link">
              <img src={Homepage} alt="" title="" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-1"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 1"
              title="Exercício 1"
            >
              <span className="link-text">Exercício</span>
              <span className="number">1</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-2"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 2"
              title="Exercício 2"
            >
              <span className="link-text">Exercício</span>
              <span className="number">2</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-3"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 3"
              title="Exercício 3"
            >
              <span className="link-text">Exercício</span>
              <span className="number">3</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-4"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 4"
              title="Exercício 4"
            >
              <span className="link-text">Exercício</span>
              <span className="number">4</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-5"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 5"
              title="Exercício 5"
            >
              <span className="link-text">Exercício</span>
              <span className="number">5</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-6"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 6"
              title="Exercício 6"
            >
              <span className="link-text">Exercício</span>
              <span className="number">6</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/exercicio-7"
              className="nav-link"
              activeClassName="active-link"
              alt="Exercício 7"
              title="Exercício 7"
            >
              <span className="link-text">Exercício</span>
              <span className="number">7</span>
            </NavLink>
          </li>

          <li
            className="nav-item"
            id="themeButton"
            onClick={changeTheme}
            alt="Mudar o tema"
            title="Mudar o tema"
          >
            <span className="nav-link">
              <span className="link-text">
                {nameTheme === "light" ? "Dark" : "Light"}
              </span>
              {nameTheme === "dark" && (
                <svg
                  className="theme-icon"
                  id="darkIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="sunglasses"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
              )}
              {nameTheme === "light" && (
                <svg
                  className="theme-icon"
                  id="lightIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="moon-stars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
              )}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
