import { styled } from "@mui/system";
import { Box, Grid, Typography, Card } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import eco_coach from "../../../assets/images/eco_coach.png";
import TButton from "../../atoms/tailwindComponent/TButton.js";

import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function OuvrirUnCompte() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 20,
          mt: {
            md: "9rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={6} lg={5.9}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 8,
                color: "common.gray",
                fontSize: "2.6rem",
                lineHeight: "1.2em",
                fontWeight: "fontWeightMedium",
              }}
            >
              Ouvrir un compte écologique et éthique en 5 min !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 2.7,
                mt: -9,
                fontSize: "21px",
                lineHeight: "1.3em",
                fontWeight: 400,
              }}
            >
              <br />
              À partir de votre compte, vous gérez votre argent, <br /> comme
              vos bonnes actions, sans compromis avec la sécurité et les
              fonctionnalités digitales.
              <br /> <br />
              C’est simple et c’est bien.
            </Typography>
          </MotionInView>
          <Box sx={{ ml: { md: 20 } }}>
            <MotionInView variants={varFadeInUp}>
              <TButton name="C'est parti !" link="/" />
            </MotionInView>
          </Box>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={4.5}>
            <MotionInView variants={varFadeInUp}>
              <Card
                sx={{
                  width: { md: 520, xs: 260 },
                  boxShadow: "8px 6px 6px 2px #8c8888",
                }}
              >
                <Box
                  component="img"
                  alt="Image d'une pièce d'hero "
                  src={eco_coach}
                  sx={{
                    borderRadius: 2,
                    width: "100%",
                    height: "36vw",
                  }}
                />
              </Card>
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
    </RootStyle>
  );
}
