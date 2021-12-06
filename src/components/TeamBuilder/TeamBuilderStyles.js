import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  icon: {
    "&.MuiSvgIcon-root": {
      width: "75px",
      height: "75px",
    },
    color: "yellow",
  },
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "85%",
    backgroundColor: "#37414f",
    border: "10px solid #000",
    boxShadow: 24,
    p: 4,
  },
}));
