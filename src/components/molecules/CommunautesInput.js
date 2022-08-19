import PropTypes from "prop-types";
import { Container, TextField, Box, Typography, Button } from "@mui/material";
import { MotionInView, varFadeInUp } from "../atoms/animate";
import { styled } from "@mui/styles";

CommunautesInput.propTypes = {
  titre: PropTypes.string,
  sx: PropTypes.any,
  titleStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  buttonStyle: PropTypes.any,
};

const CustomTextField = styled(TextField)({
  width: "656px",
  background: "#fff",
  marginTop: "44px",
  marginBottom: "51px",
  borderRadius: "16px",
  outline: "none",
  "& .MuiInputBase-input": {
    color: "#10403B",
  },
});

export default function CommunautesInput({
  titre,
  sx,
  titleStyle,
  inputStyle,
  buttonStyle,
}) {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "382px",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            color: "#10403B",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: "34px",
            ...titleStyle,
          }}
        >
          {titre}
        </Typography>
        <MotionInView variants={varFadeInUp}>
          <CustomTextField type="email" placeholder="* votre@email.com" />
        </MotionInView>
        <Button
          sx={{
            variant: "contained",
            borderRadius: 50,
            background: "#10403B !important",
            "&:hover": { background: "#2A7267 !important" },
            boxShadow: "none",
            color: "#fff",
            fontSize: "16px",
            padding: "7px 38px 10px 38px",
          }}
        >
          M'abonner
        </Button>
      </Box>
    </Container>
  );
}
