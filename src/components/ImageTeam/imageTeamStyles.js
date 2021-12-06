import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    height: "27%",
    backgroundColor: "#37414f",
    border: "10px solid #000",
    boxShadow: 24,
    p: 4,
  },
}));
