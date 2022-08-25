import { styled } from "@mui/system";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Cursor, Typewriter } from "react-simple-typewriter";
import ademe from "../../../assets/images/ademe.svg";
import semeur_image from "../../../assets/images/semeur_image.svg";
import abc from "../../../assets/images/abc.svg";
import only_name from "../../../assets/images/only_name.svg";
import CommunautesInput from "src/components/molecules/CommunautesInput";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "-3rem",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function EntrepriseCarbone() {
  return (
    <RootStyle>
      <Grid sx={{ display: "flex", flexDirection: "row", mt: -10 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "591px",
            bgcolor: "#10403B",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "32px", xs: "22px" },
              color: "#fff",
              fontWeight: 800,
              lineHeight: "57px",
              margin: "40px 50px -70px 50px",
              textAlign: "center",
            }}
          >
            Ensemble, réduisons notre empreinte carbone et changeons notre façon
            de consommer afin d’adopter un mode de vie plus durable !
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              bgcolor: "#fff",
              width: "614px",
              height: "191px",
            }}
          >
            <Link href="https://www.ademe.fr/" target="_blank">
              <Box component="img" src={ademe} />
            </Link>
            <Link href="https://abc-transitionbascarbone.fr/" target="_blank">
              <Box component="img" src={abc} />
            </Link>
          </Box>
        </Box>
        <Box component="img" src={semeur_image} />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mb: 10,
            mt: {
              md: 10,
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
              color: "#C4E3D5",
            }}
          >
            <Typewriter
              words={["digital", "responsable", "transparent"]}
              loop
            />
            <Cursor />
          </Typography>
        </Box>
      </Grid>

      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          mb: {
            md: 4,
            xs: 8,
          },
        }}
      >
        <Box
          component="img"
          src={only_name}
          alt="Soyez riche de vos valeurs."
        />
      </Grid>
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
        Soyez riche de vos <span style={{ color: "#C4E3D5" }}>valeurs</span>
        <span style={{ color: "#FAAA42" }}>.</span>
      </Typography>
      <CommunautesInput titre="Rejoins la communauté" />
    </RootStyle>
  );
}
