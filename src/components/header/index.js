import React from "react";
import logo from "../../images/logo.png";
import "./header.scss";
function Header() {
  return (
    <header class="header">
      <nav>
        <ul>
          <li style={{ width: "20%" }}>
            <div>Heli</div>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Be part of us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>

          <li>
            <a href="#"> Healthy life</a>
          </li>
          <li>
            <a href="#"> Create your routine</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
