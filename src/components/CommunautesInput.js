import { Grid, Typography, Container, Stack, TextField } from "@mui/material";
import { MotionInView, varFadeInUp } from "./animate";
import TButton from "./tailwindComponent/TButton.js";

export default function CommunautesInput() {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <Typography
          sx={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            mb: 6,
            mt: 1,
          }}
        >
          Rejoins la communauté
        </Typography>
      </Grid>
      <Stack
        sx={{
          mb: 8,
          ml: {
            md: "15rem",
            xs: 0,
          },
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
        <MotionInView variants={varFadeInUp} className="my-2">
          <TButton name="M'abonner" link="/" />
        </MotionInView>
      </Stack>
    </Container>
  );
}
