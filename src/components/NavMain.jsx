import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/nav.css";

export default function NavMain() {
  return (
    <div id="all">
    <nav className="nav-main">
      <ul className="ul-nav">
      {/* <img className="img-nav" src="https://res.cloudinary.com/djoha9r5n/image/upload/v1586356492/lesbotruck/Lbt_petit_jbe3gy.png" alt="logo"/> */}
      <li className="list-nav"><NavLink exact to="/">Lesbotruck+</NavLink></li>
      <li className="list-nav"><NavLink to="/evenements-mobilisations">Evénements/Mobilisations</NavLink></li>
      <li className="list-nav"><NavLink to="/culture">Culture</NavLink></li>
      <li className="list-nav"><NavLink to="/sante">Santé</NavLink></li>
      <li className="list-nav"><NavLink to="/medias">Médias</NavLink></li>
      <li className="list-nav"><NavLink to="/rejoins-nous">Rejoins-nous</NavLink></li>
      <li className="list-nav"><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
    </div>
  );
}
