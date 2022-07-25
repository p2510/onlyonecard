import PropTypes from "prop-types";
import { Grid, Container, Stack, TextField, Box } from "@mui/material";
import { MotionInView, varFadeInUp } from "./animate";
import TButton from "./tailwindComponent/TButton.js";

CommunautesInput.propTypes = {
  title: PropTypes.any,
  sx: PropTypes.any,
  inputStyle: PropTypes.any,
  buttonStyle: PropTypes.any,
};

export default function CommunautesInput({
  title,
  sx,
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
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            mb: 6,
            mt: 1,
            ...sx,
          }}
        >
          {title}
        </Box>
      </Grid>
      <Stack
        sx={{
          mb: 8,
          ml: {
            md: "15rem",
            xs: 0,
          },
          ...inputStyle,
        }}
      >
        <MotionInView variants={varFadeInUp}>
          <TextField
            type="email"
            sx={{
              bgcolor: "#fff",
              borderRadius: "7.5px",
              width: {
                md: "39rem",
                xs: "100%",
              },
            }}
            label="* votre@email.com"
          />
        </MotionInView>
        <Box sx={{ ...buttonStyle }}>
          <MotionInView variants={varFadeInUp} className="my-2">
            <TButton name="M'abonner" link="/" />
          </MotionInView>
        </Box>
      </Stack>
    </Container>
  );
}
