import React from "react";
import FlipCard from "../../components/flipCard";
import home1 from "../../images/home-first.png";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <div className="section-1">
        <img alt="section" src={home1} />
      </div>
      <div className="section-2">
        <FlipCard />
      </div>
    </div>
  );
}
export default Home;
