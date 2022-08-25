import { Box, Grid, Typography, Container } from "@mui/material";
import Icon_cadenas from "../../../assets/images/Icon_cadenas.svg";
import { BANQUEDATA } from "./Home.constant";
import Banques from "../../molecules/Banques";

export default function BanqueSection() {
  return (
    <Box
      sx={{
        bgcolor: "#f1ebdf",
        height: { md: "980px", xs: "1800px" },
      }}
    >
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
            src={Icon_cadenas}
            alt="Lock"
            sx={{
              width: "120px",
              height: "120px",
              mt: "80px",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: { md: "38px", xs: "28px" },
              flexDirection: { md: "row", xs: "column" },
              fontWeight: "bold",
              alignItems: "center",
              mb: { md: 3, xs: -4 },
            }}
          >
            <span>Votre argent est en </span>
            <span style={{ color: "#00db89", marginLeft: "0.5rem" }}>
              sécurité
            </span>
            <span style={{ color: "#FAAA42", marginLeft: "0.5rem" }}>.</span>
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
            mt: "50px",
          }}
        />
      </Container>
    </Box>
  );
}
