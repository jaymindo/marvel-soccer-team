import React from "react";

const CharacterItem = ({ item, setFootballPlayer, setOpen }) => {
  const pickPlayer = () => {
    setFootballPlayer({ name: item.name, img: item.thumbnail.path });
    setOpen(false);
    console.log("clicked", item.name);
  };
  return (
    <div className="content">
      <div className="content-inner" onClick={pickPlayer}>
        <div className="content-front">
          <img
            src={item.thumbnail.path + "/portrait_xlarge.jpg"}
            alt="character"
          />
        </div>
        <div className="content-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
