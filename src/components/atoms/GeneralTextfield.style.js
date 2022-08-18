import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const CustomTextField = styled(TextField)({
  width: "656px",
  background: "#fff",
  marginTop: "44px",
  marginBottom: "51px",
  border: "0px",
  borderRadius: 9,
  outline: "none",
  noBorder: {
    border: "none",
  },
  "& .css-1k2zuns-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "50px",
  },
  "& .MuiInputBase-input": {
    color: "#333",
    fontWeight: "900",
  },
});
