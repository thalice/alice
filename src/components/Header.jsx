import React from "react";
import "./styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div id="header-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="110.4"
          viewBox="0 0 400 110.4"
        >
          <path
            d="M150.7 22.3c-4.3 2-6.2 2.4-16.3 3.3-8.7.8-11 1.9-10 4.5.4 1.2 1.4 1.3 10 .8 8.7-.4 9.4-.4 9.1 1l-2.3 10.6c-3 14.3-2.7 21.1 1.3 20.6 1.8-.3 2-.7 2.4-8.3a144 144 0 014.4-24.5c.4-1.5 4.8-3.6 5.7-2.8.3.3 0 7.2-.4 15.4-1 15.1-.8 17.1 1.8 17.1 1.5 0 4.3-3.4 5.5-6.8l1.2-3.2v2.7c.1 4.5 4.8 8.4 9.3 7.8 2-.2 3.7-.1 4 .3 1 1.5 5 .8 7.1-1.2 2.7-2.5 2.7-2.5 5.7.4s5.8 2.7 8.3-.5a5 5 0 013.5-1.9c2.3 0 7-4.7 7-7 0-.8.7 0 1.5 2 2.2 4.8 7.7 5.1 9.4.6.6-1.7 1.5-1.5 3.9.7 3 2.9 5.7 3.2 9.2 1.4 3-1.6 3.1-1.6 3.6-.1 1.8 5.7 9.7-.4 10-7.8.1-.8.6.5 1.2 2.9 1.8 7.5 6 8.7 9 2.7l1.4-3 2.4 3.2 2.5 3.2 6.5.1c6 .1 6.6 0 9-2.2l2.6-2.4 1.8 2c2.4 2.6 2.6 2.6 6 .1l2.7-2 1.4 2.4c3 5 7.7 2 9.5-5.8 2.6-12.2 3.5-15 4.5-15.9 1.4-1.1 1.5 3.5.3 10.8-1.5 9.2 1.9 12.6 9 9 3.6-2 4-2 5.8-.8 2.3 1.5 6 0 7.7-3.1l1-1.8.8 2.1c2.2 5.3 4.8 6.4 9.8 4.3 2.2-.9 3.2-1 4.8-.2 1.5.7 2.4.7 3.6 0 4.7-3 .4 15.8-4.7 20.2-11.7 10.3-17.1 26.8-9 27.4 6.3.5 12.1-7.2 15.3-20.4l1.8-7.4 5.8-2.4c6.2-2.6 12.2-4 17-4 1.6 0 3.5-.5 4.3-1.1 5.7-4.3-7.6-5-19.5-.9-6.8 2.4-6.3 2.6-5.5-2.8l1.6-11.2c.5-4.2 1.4-7.6 2.3-8.8 4.4-6 5.1-9.7 2.1-11.6-3.5-2.4-8.4 2-13.3 12.1-1.8 3.7-4.8 5.9-8.3 5.9-2.9 0-3.2-1.7-1.7-8.3 2.7-11.5-.7-11.6-8-.3-2 3-3.8 5.4-4 5.4-.5 0 .4-5.1 1.5-8.7 1-3.2-.3-4.5-3-3-.9.4-3.2.8-5.2.9-2 0-4.2.4-5 .7-1.2.6-1.4.3-1.4-1.8 0-3-2.5-5.7-5.3-5.7-3.8 0-6.3 3.6-8.3 12.4-2.6 11.4-3.4 11.2-4.2-.8-.4-7.1-4.8-4-5.9 4.4-1.1 8.6-4 6.9-3.4-2 .3-3.3-3.1-6.8-6.6-6.8-3.5 0-11 10-11 14.6-.1 2.5-2.5 1.5-3.8-1.5-.8-2-1.1-4.7-1-7.7.6-9.4-3-8.4-7.6 2l-2.7 6.2-.5-5.3c-1-10.1-3.8-11.2-7.7-3.1-2.9 6-3 6.1-2.6 2.4.3-2 0-3-1-3.3-2.1-.8-3.8 1.6-4.2 6.1-.4 4.4-.5 4.4-5.2 5.2-3.4.5-6.2-2.6-6.2-7 0-5.6-4-4.6-7.2 1.9-3 6-3.4 6-3-.9.3-10.4-3.3-10.4-8.6 0-2.7 5.1-2.7 5.1-2.8 2.4-.1-7.3-2.7-12.5-5.2-10.4-1.2 1-1.2 11.2 0 17.2.3 1.2-.2 1.9-1.8 2.5-3.4 1.3-4.2.6-4.2-3.6 0-4-3.2-10.8-5.7-12.4-2.7-1.6-5.2.6-8.7 7.9-5.1 10.5-8.8 9.7-8.8-2 0-9.2-2.2-10.6-6.4-4.1l-2 3V34c0-13.8-1.4-15.4-9.7-11.7M44.1 31a83.3 83.3 0 00-2.6 7.7c-.2 1-1.6 2-4.4 2.9-9.8 3.2-21.8 17.2-21 24.6.5 4 3.2 2.8 4.8-2.2 2.4-7 14.4-18.7 17.3-16.9 2.2 1.3-3 14.4-9.1 23-3.7 5.2-4.2 7-2.3 7.8C30.3 79.2 38.3 65.6 43 50l.7-2.3 2.5 2.2c3.7 3 6.6 8.3 8.6 15.5 1.3 4.9 2 6.1 3.3 6.3 3.2.5 3.6-1.4 1.8-8.7a1106 1106 0 01-7.5-34c-1.5-6.5-5.4-5.6-8.3 1.9m5.5 9.5c1.8 7.5 1.8 7.4-1.9 4.1l-3-2.6 1.4-4.7c.8-2.7 1.5-4.4 1.7-4l1.8 7.2m15.2-6.2c-1.6 3-2 25.8-.5 28.7 2.3 4.5 4.5 5 8.3 1.5l1.8-1.6 2.4 2.5C80 69 83 69 86.3 65.2c4.3-4.9 2.8-10-1.5-5.3-4 4.3-7.8-1-5.8-7.7 1-3.2.3-5-2.2-5-1 0-2 1.7-3.5 5.5-4.2 10.7-6 6.8-4.7-9.9.6-6.8.5-8.1-.6-9-1.7-1.3-2.2-1.2-3.2.5m15.4 3c-1.7.7-1.1 3.3 1.1 5 3.6 2.9 5.7.4 3.1-3.5-1.2-2-2.2-2.3-4.2-1.5M319.5 41c.6 2.2-4 7-6.8 7-2 0-1.7-4.8.6-7.3 2-2.2 5.6-2 6.2.3m-40.3 1c0 3.2-3.8 9.2-5.7 9.2-1.8 0 0-6.8 2.7-10.2 1.4-1.7 3-1.1 3 1M97.8 45.9C88 56.6 93.6 70.6 105.3 64c4.4-2.5 4.5-2.5 7.2-1.2 3.3 1.6 5.2 1.2 10.5-1.9 6-3.5 5-7.5-1.1-4.6-2.4 1.1-7.5 1.8-7.5 1l1.7-4c2-4.6 1.5-7.4-1.4-8.5-4-1.6-8.3 3.7-8.3 10.2 0 3.5-2 5-6.3 5-2.3 0-2.3 0-1.6-3.6 1-5.5 2-7 3.9-5.8 3.3 2 5.5-3 2.2-5.4-2.5-1.7-4.8-1.5-6.8.6m87.4 1.5c.4 1-.1 2.7-1.5 4.8-2.5 3.6-3.9 4.1-3 .9 2.4-7.5 3.5-9 4.5-5.7m160.4 34.4C343 91.1 336 101 336 95c0-3.8 8.7-18.6 10.2-17.1.1.2-.1 2-.6 3.8"
            fill-rule="evenodd"
          />
        </svg>
        <span>Ux designer</span>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/accueil">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/aboutMe">Alice</NavLink>
          </li>
          <li>
            <NavLink to="/realisations">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
