import React, { createRef } from "react";
import TeamDisplay from "../TeamDisplay/TeamDisplay";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useStyles from "./imageTeamStyles";
import ShareTeam from "../ShareTeam/ShareTeam";
import { useMediaQuery } from "react-responsive";
import { useScreenshot } from "use-react-screenshot";

const ImageTeam = ({ shareHandle, setShareHandle }) => {
  const classes = useStyles();
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();

  const isMobile = useMediaQuery({ query: `(max-width: 860px)` });
  const handleClose = () => setShareHandle(false);
  const getImage = () => takeScreenShot(ref.current);
  const handleSave = () => {
    const screenCaptureSource = image;
    const downloadLink = document.createElement("a");
    const fileName = "react-screen-capture.png";

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  return (
    <div>
      <Modal
        open={shareHandle}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBox}>
          <div>
            <button style={{ marginBottom: "10px" }} onClick={getImage}>
              Take screenshot
            </button>
          </div>
          {isMobile ? (
            <img width={68} src={image} alt="" />
          ) : (
            <img width={300} src={image} alt="" />
          )}
          <div>{image && <button onClick={handleSave}>Download</button>}</div>
          <ShareTeam />
        </Box>
      </Modal>

      <div className="center">
        <div
          ref={ref}
          style={{
            border: "1px solid #ccc",
            width: "fit-content",
          }}
        >
          <TeamDisplay />
        </div>
      </div>
    </div>
  );
};

export default ImageTeam;
