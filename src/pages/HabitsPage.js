import React from "react";
import HabitsHeaderComponent from "../components/HabitsHeaderComponent";
import HabitsListContaner from "../containers/HabitsListContainer";

const HabitsPage = () => {
  return (
    <div>
      <HabitsHeaderComponent title={"Habits"} />
      <HabitsListContaner />
    </div>
  );
};

export default HabitsPage;
