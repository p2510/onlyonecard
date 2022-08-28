import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/system";
import "react-phone-number-input/style.css";
import { MotionInView, varFadeInUp } from "../../atoms/animate";
import { PRESSEPARTENAIRESDATA } from "./PressePartenaires.constant";
import cercle from "../../../assets/images/cercle.svg";
import terre_image from "../../../assets/images/terre_image.svg";
import { MHidden } from "src/components/atoms/@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function PressPartenaires() {
  return (
    <RootStyle>
      <Container
        spacing={10}
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 23,
        }}
      >
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mb: "6rem",
            ml: { md: -35, xs: 0 },
          }}
        >
          <MHidden width="mdDown">
            <Grid xs={6} sx={{ padding: "25px", marginRight: -55 }}>
              <Box component="img" src={cercle} alt="image de cercle" />
            </Grid>
          </MHidden>
          <Grid xs={6}>
            <Typography
              sx={{
                fontSize: "42px",
                fontWeight: 900,
                lineHeight: { md: "63px", xs: "50px" },
                textAlign: { md: "center", xs: "center" },
                color: "#10403B",
                mt: {
                  md: 5,
                  xs: -5,
                },
              }}
            >
              <span style={{ color: "#C4E3D5" }}>
                {" "}
                Chaque personne compte <br />{" "}
              </span>
              Pour créer le monde de demain
            </Typography>
          </Grid>
        </Grid>
        <MotionInView variants={varFadeInUp}>
          <Button
            sx={{
              fontWeight: 700,
              borderRadius: 50,
              bgcolor: "#2A7267 !important",
              "&:hover": { bgcolor: "#10403B !important" },
              boxShadow: "none",
              marginLeft: { md: "430px", xs: 0 },
              marginTop: { md: 0, xs: -3 },
              marginBottom: { md: -23, xs: 5 },
              padding: "7px 40px 7px 40px",
              fontSize: "16px",
            }}
            variant="contained"
          >
            Rejoindre le programme
          </Button>
        </MotionInView>
        <MHidden width="mdDown">
          <Grid sx={{ marginLeft: 8, mt: -20 }}>
            <Box component="img" src={terre_image} alt="image de cercle" />
          </Grid>
        </MHidden>
      </Container>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: -10,
          mt: { md: -48.5, xs: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: { md: "center", xs: "center" },
            width: "100%",
            height: { md: "338px", xs: "630px" },
            background: "#E4D6C0",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "32px", xs: "20px" },
              color: "#10403B",
              fontWeight: 700,
              lineHeight: "48px",
              textAlign: "center",
              mb: { md: 0, xs: 4 },
              mt: { md: 0, xs: 10 },
            }}
          >
            Ils parlent de nous
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Grid
            item
            spacing={6}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" },
              width: "100%",
            }}
          >
            {PRESSEPARTENAIRESDATA.map((item) => (
              <Box key={item.id} mb={{ md: 0, xs: 5 }}>
                <Box
                  component="img"
                  src={item.logo}
                  alt="Nos partenaires de la presse"
                />
              </Box>
            ))}
          </Grid>
        </Box>
      </Grid>
    </RootStyle>
  );
}
