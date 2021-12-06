import React, { useState } from "react";
import Box from "@mui/material/Box";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import IconButton from "@mui/material/IconButton";
import GetCharacters from "../../api/GetCharacters";
import Search from "../Search";
import Modal from "@mui/material/Modal";
import CharacterIconDisplay from "../CharacterIconDisplay/CharacteIconDisplay";

import useStyles from "./TeamBuilderStyles";

const TeamBuilder = ({ role }) => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [footballPlayer, setFootballPlayer] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {footballPlayer ? (
        <div>
          <CharacterIconDisplay footballPlayer={footballPlayer} role={role} />
        </div>
      ) : (
        <div>
          <IconButton aria-label="player-icon" onClick={handleOpen}>
            <DirectionsRunIcon className={classes.icon} />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.modalBox}>
              <Search search={(q) => setQuery(q)}></Search>
              <GetCharacters
                query={query}
                setFootballPlayer={setFootballPlayer}
                setOpen={setOpen}
              />
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default TeamBuilder;
