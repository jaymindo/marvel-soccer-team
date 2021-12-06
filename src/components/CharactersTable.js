import React from "react";
import Character from "./Character";

const CharactersTable = ({ items, isLoading, setFootballPlayer, setOpen }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="contents">
      {items.map((item) => {
        return (
          <Character
            key={item.id}
            item={item}
            setFootballPlayer={setFootballPlayer}
            setOpen={setOpen}
          ></Character>
        );
      })}
    </section>
  );
};

export default CharactersTable;
