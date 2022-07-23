import { Box, Grid, Typography, Container } from "@mui/material";
import Lock from "../../assets/images/Lock.png";
import { BANQUEDATA } from "./Home.constant";
import Banques from "src/components/Banques";

export default function BanqueSection() {
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
        <Box
          component="img"
          src={Lock}
          alt="Lock"
          sx={{
            mb: 0.5,
            width: "120px",
            height: "120px",
          }}
        />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.2rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 3,
            mt: {
              md: 1,
            },
          }}
        >
          Votre argent est en{" "}
          <span style={{ color: "#00db89" }}> sécurité</span> !
        </Typography>
      </Grid>
      <Banques
        data={BANQUEDATA}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            md: 4,
            xs: 8,
          },
          top: {
            xs: -70,
            md: -40,
          },
        }}
      />
    </Container>
  );
}
