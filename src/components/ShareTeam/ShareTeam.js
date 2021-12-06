import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

const ShareTeam = ({ shareHandle }) => {
  return (
    <div>
      <FacebookShareButton
        quote={
          "Visit this website to build the marvel football team: http://localhost:3000/"
        }
        hashtag={"#MarvelFootballTeamBuilder"}
        url={"https://github.com/jaymindo/marvel-soccer-team"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        title={
          "Visit this website to build the marvel football team: http://localhost:3000/"
        }
        hashtag={"#MarvelFootballTeamBuilder"}
        url={"https://github.com/jaymindo/marvel-soccer-team"}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default ShareTeam;
