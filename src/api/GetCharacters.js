import React, { useState, useEffect } from "react";
import CharactersTable from "../components/CharactersTable";
import axios from "axios";
import { useAlert } from "react-alert";

const md5 = require("md5");

const privateKey = process.env.REACT_APP_MARVEL_KEY_PRIVATE;
const apikey = process.env.REACT_APP_MARVEL_KEY_PUBLIC;
const hash = md5("1" + privateKey + apikey);

const GetCharacters = ({ query, setFootballPlayer, setOpen }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const alert = useAlert();

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?limit=16&ts=1&apikey=${apikey}&hash=${hash}`
        );
        if (result.data.data) {
          setItems(result.data.data.results);
          setLoading(false);
          alert.success("success");
        } else {
          alert.error("api problem, reload the page");
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?limit=16&nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`
        );
        if (result.data.data) {
          setItems(result.data.data.results);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [query, alert]);

  return (
    <div className="container">
      <CharactersTable
        items={items}
        isLoading={isLoading}
        setFootballPlayer={setFootballPlayer}
        setOpen={setOpen}
      />
    </div>
  );
};

export default GetCharacters;
