import React from "react";

const CharacterIconDisplay = ({ footballPlayer, role }) => {
  return (
    <div className="content-icon">
      <img src={footballPlayer.img + "/portrait_xlarge.jpg"} alt="character" />
      <h1 className="content-icon-name">
        {footballPlayer.name.indexOf("(") > 1
          ? footballPlayer.name.substr(0, footballPlayer.name.indexOf("("))
          : footballPlayer.name}
      </h1>
      <h1 className="content-icon-role">role: {role}</h1>
    </div>
  );
};

export default CharacterIconDisplay;
