import PropTypes from "prop-types";
import { Container, TextField, Box, Typography, Button } from "@mui/material";
import { MotionInView, varFadeInUp } from "../atoms/animate";

CommunautesInput.propTypes = {
  titre: PropTypes.string,
  sx: PropTypes.any,
  titleStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  buttonStyle: PropTypes.any,
};

export default function CommunautesInput({
  titre,
  sx,
  textFieldStyle,
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
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "382px",
          mt: 14,
          mb: -5,
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "32px", xs: "20px" },
            color: "#10403B",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: "34px",
            ...titleStyle,
          }}
        >
          {titre}
        </Typography>
        <Box
          sx={{
            minWidth: "70%",
            marginLeft: { md: "230px", xs: "-80px" },
            ...textFieldStyle,
          }}
        >
          <MotionInView variants={varFadeInUp}>
            <TextField
              // fullWidth
              sx={{
                width: { md: "665px", xs: "300px" },
                background: "#fff",
                marginTop: "44px",
                marginBottom: "51px",
                borderRadius: "16px",
                outline: "none",
                "& .MuiInputBase-input": {
                  color: "#10403B",
                },
              }}
              type="email"
              placeholder="* votre@email.com"
            />
          </MotionInView>
        </Box>
        <Button
          sx={{
            variant: "contained",
            borderRadius: 50,
            background: "#2A7267 !important",
            "&:hover": { background: "#10403B !important" },
            boxShadow: "none",
            color: "#fff",
            fontSize: "16px",
            marginLeft: { md: "500px", xs: "0px" },
            padding: "7px 38px 7px 38px",
          }}
        >
          M'abonner
        </Button>
      </Box>
    </Container>
  );
}
