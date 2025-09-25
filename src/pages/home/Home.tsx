import React from "react";
import Body from "../../components/body/Body";
import Header from "../../components/header/Header";
import Services from "../services/Services";
import Projects from "../../components/projects/Projects";

const Home = () => {
  return<div>
    <Body />
    <Projects />
    <Services />
  </div>
  
};

export default Home;
