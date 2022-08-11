import { styled } from "@mui/system";

export const buttonTwoStyles = {
  borderRadius: 50,
  p: 1,
  m: 2,
  minWidth: "150px",
  border: "1px solid",
  borderColor: "#00db89",
  textTransform: "none",
  color: "#333",
  bgcolor: "#00db89",
  "&:hover": { backgroundColor: "#00db89" },
};

export const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));
