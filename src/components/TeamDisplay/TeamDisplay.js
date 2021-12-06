import React from "react";
import TeamBuilder from "../TeamBuilder/TeamBuilder";
import FootballPitch from "../../image/football-pitch.png";

const TeamDisplay = () => {
  return (
    <div className="football-pitch-background">
      <img src={FootballPitch} alt={"football-pitch"} />
      <div className="football-player">
        <TeamBuilder role={"DF"} />
      </div>
      <div className="football-player">
        <TeamBuilder role={"ST"} />
      </div>
      <div className="football-player">
        <TeamBuilder role={"MD"} />
      </div>
      <div className="football-player">
        <TeamBuilder role={"MD"} />
      </div>
      <div className="football-player">
        <TeamBuilder role={"ST"} />
      </div>
      <div className="football-player">
        <TeamBuilder role={"GK"} />
      </div>
    </div>
  );
};

export default TeamDisplay;
