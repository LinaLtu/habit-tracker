import React from "react";
import Logo from "../components/Logo";
import EnterButtonContainer from "../containers/EnterButtonContainer";
import HomeHeaderContainer from "../containers/HomeHeaderContainer";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHeaderContainer />
      <Logo />
      <EnterButtonContainer />
    </div>
  );
};

export default HomePage;
