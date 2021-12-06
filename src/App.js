import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import ImageTeam from "./components/ImageTeam/ImageTeam";

import useStyle from "./styles";

function App() {
  const [shareHandle, setShareHandle] = useState(false);

  const handleClick = () => {
    setShareHandle(true);
  };
  const classes = useStyle();
  return (
    <div className="App">
      <Header />
      <ImageTeam shareHandle={shareHandle} setShareHandle={setShareHandle} />
      <div className="center">
        <h1 className="title">
          Click on the yellow player to pick Marvel characters for your team
        </h1>
      </div>
      <div className="bottom-button">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            className={classes.reStartButton}
            onClick={() => window.location.reload(false)}
          >
            <RefreshIcon /> Start Again
          </Button>
          <Button
            variant="contained"
            className={classes.shareButton}
            onClick={handleClick}
          >
            <ShareIcon />
            Share
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
