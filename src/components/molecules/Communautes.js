import { Box, Grid, Typography, Container } from "@mui/material";
import { Cursor, Typewriter } from "react-simple-typewriter";
import lampe_icon from "../../assets/images/lampe_icon.png";
import Logo from "../atoms/Logo";
import CommunautesInput from "./CommunautesInput";

export default function Communautes() {
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
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
            mt: {
              md: 1,
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              alignItems: "center",
              mr: "1rem",
            }}
          >
            Un Compte
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2.4rem",
              fontWeight: "bold",
              alignItems: "center",
              color: "#00bd85",
            }}
          >
            <Typewriter words={["simple", "sécurisé", "responsable"]} loop />
            <Cursor />
          </Typography>
        </Box>
        <Box
          component="img"
          src={lampe_icon}
          alt="Lock"
          sx={{
            mb: 0.5,
            width: "150px",
            height: "115px",
          }}
        />
        <Logo />
      </Grid>

      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
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
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.7rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 5,
            mt: {
              md: 2,
            },
          }}
        >
          Conciliez votre argent et vos valeurs.
        </Typography>
      </Grid>
      <CommunautesInput title="Rejoins la communauté" />
    </Container>
  );
}
