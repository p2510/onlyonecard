import React, { useState } from "react";
import presentation from "../../../assets/images/presentation.svg";
import euro_image from "../../../assets/images/euro_image.svg";
import planete_image from "../../../assets/images/planete_image.svg";
import { styled } from "@mui/system";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { MHidden } from "src/components/atoms/@material-extend";
import PropTypes from "prop-types";
import { PATH_PAGE } from "src/configues/routes/paths";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from "src/components/atoms/animate";
import { ACTIONSDATA } from "./Home.constant";
import Dialogue from "src/components/molecules/Dialogue";

const RootStyle = styled("div")(({ theme }) => ({
  marginBottom: "13rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

LandingFirstSection.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function LandingFirstSection() {
  const [open, setOpen] = useState(false);
  const modalClose = () => {
    setOpen(false);
  };

  return (
    <RootStyle>
      <Grid container>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={presentation}
            alt="Le 1er compte à impact positif."
          />
        </MHidden>
      </Grid>
      <Grid container>
        <Box
          component="container"
          sx={{
            width: { md: "587px", xs: "100%" },
            bgcolor: "#10403B",
            height: "455px",
            position: "absolute",
            top: { md: "308px", xs: "100px" },
            left: { md: "68px", xs: "0px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              width: { md: "480px", xs: "100%" },
              height: "133px",
              fontSize: { md: "42px", xs: "22px" },
              color: "#fff",
              fontWeight: 900,
              lineHeight: "63px",
              fontStyle: "normal",
              margin: "39px 0px 0px 0px",
              marginRight: { md: "73px", xs: 0 },
              marginLeft: { md: "34px", xs: 0 },
            }}
          >
            <span>
              Le 1er compte à <br />
            </span>
            <span style={{ color: "#C4E3D5" }}>impact positif</span>
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Lora",
              margin: "17px 49px 0px 34px",
              fontSize: "18px",
            }}
          >
            Un compte courant, une carte Mastercard pour protéger la
            biodiversité et réduire les inégalités
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              font: "Lora",
              margin: "17px 49px 66px 34px",
              fontSize: "18px",
            }}
          >
            Et tous les services de gestion de compte au quotidien.
          </Typography>
          <Button
            sx={{
              borderRadius: 50,
              bgcolor: "#FAAA42",
              "&:hover": { bgcolor: "#f7b96c" },
              boxShadow: "none",
              marginTop: { md: "7px", xs: -5 },
              marginRight: { md: "201px", xs: "0px" },
              marginLeft: { md: "201px", xs: "0px" },
              fontSize: "15px",
              padding: "7px 18px 10px 18px",
            }}
            variant="contained"
            href={PATH_PAGE.UnGesteUnImpact}
          >
            En savoir plus
          </Button>
        </Box>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { md: "-100px", xs: "10rem" },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: { md: "#fff", xs: "#10403B" },
            fontFamily: "Poppins",
            fontSize: { md: "32px", xs: "22px" },
            fontWeight: 700,
            mt: { md: "-30px", xs: "470px" },
            zIndex: 6,
          }}
        >
          Avec OnlyOne, alignez votre argent et vos valeurs, simplement
        </Typography>
      </Box>
      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: { md: "170px", xs: "80px" },
        }}
      >
        {ACTIONSDATA.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: "328px",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box>
                <Box
                  component="img"
                  src={item.icon}
                  alt="Un compte courant"
                  width="63px"
                  height="91px"
                />
              </Box>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bolder",
                  color: "#C4E3D5",
                  mt: "20px",
                  mb: 3,
                }}
              >
                {item.title}
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    textAlign: "inherit",
                    color: "#10403B",
                    fontFamily: "Lora",
                    margin: "0px 2px",
                  }}
                >
                  {item.paragraphe}
                  <br />
                  <br />
                  {item.paragraphe2}
                </Typography>
              </Box>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 16, mb: 12 }}>
        <Button
          sx={{
            borderRadius: 50,
            bgcolor: "#2A7267 !important",
            "&:hover": { bgcolor: "#10403B !important" },
            boxShadow: "none",
            fontSize: "15px",
            padding: "7px 28px 10px 28px",
          }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          J'ouvre un compte écologique et éthique
        </Button>
      </Box>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={euro_image}
            alt="J'ouvre un compte écologique et éthique"
          />
        </MHidden>
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            height: "588px",
            bgcolor: "#10403B",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              ml: "5000px",
              height: "133px",
              fontSize: { md: "38px", xs: "20px" },
              color: "#fff",
              fontWeight: 900,
              lineHeight: { md: "63px", xs: "40px" },
              fontStyle: "normal",
              margin: "0px 73px 0px 68px",
              marginTop: { md: "39px", xs: 0 },
            }}
          >
            Chaque euro peut devenir une bonne{" "}
            <span style={{ color: "#C4E3D5" }}>action</span>
            <span style={{ color: "#FAAA42" }}>!</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Lora",
              margin: "0px 49px 0px 68px",
              marginBottom: { md: " 69px", xs: 2 },
              fontSize: "18px",
            }}
          >
            Vous avez envie de transformer vos bonnes intentions en actions ?
            <br />
            <br />
            Directement dans l’application, votre éco-coach mesure votre
            empreinte <br />
            carbone et vous accompagne dans chacun de vos écogestes avec des
            conseils <br /> personnalisés. <br />
            <br /> C’est toujours bien de faire mieux, non ?
          </Typography>
          <Button
            sx={{
              borderRadius: 50,
              bgcolor: "#FAAA42",
              "&:hover": { bgcolor: "#f7b96c" },
              boxShadow: "none",
              margin: "7px 0px 0px 68px",
              marginRight: "50px",
              fontSize: "16px",
              padding: "7px 38px 10px 38px",
            }}
            variant="contained"
            href={PATH_PAGE.UnGesteUnImpact}
          >
            Comment ça marche
          </Button>
        </Box>
      </Grid>
      <Grid
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            height: "584px",
          }}
        >
          <Container>
            <Typography
              sx={{
                fontFamily: "Poppins",
                ml: "5000px",
                height: "133px",
                fontSize: { md: "32px", xs: "22px" },
                color: "#10403B",
                fontWeight: 900,
                lineHeight: { md: "63px", xs: "40px" },
                fontStyle: "normal",
                marginTop: { md: "39px", xs: 0 },
                marginLeft: { md: "68px", xs: "10px" },
                marginRight: { md: "73px", xs: 0 },
              }}
            >
              Épargnez votre argent, épargnez la planète !
            </Typography>
            <Typography
              sx={{
                color: "10403B",
                fontFamily: "Lora",
                margin: "0px 49px 69px 68px",
                marginBottom: { md: "49px", xs: 2 },
                fontSize: "18px",
              }}
            >
              Vous avez réussi à faire des économies, vous aimeriez les faire
              fructifier tout en <br /> faisant de bonnes actions ? <br />
              <br /> Découvrez le compte OnlyOne qui vous conseille et vous
              propose des services <br /> innovants, responsables et sécurisés.
            </Typography>
            <Button
              sx={{
                borderRadius: 50,
                bgcolor: "#2A7267",
                "&:hover": { bgcolor: "#10403B" },
                boxShadow: "none",
                margin: "7px 0px 0px 70px",
                marginLeft: { md: "70px", xs: 0 },
                marginRight: { md: "201px", xs: 0 },
                fontSize: "16px",
                padding: "7px 38px 10px 38px",
              }}
              variant="contained"
              href={PATH_PAGE.PlaceImpact}
            >
              J'explore la Place Impact
            </Button>
          </Container>
        </Box>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={planete_image}
            width="469px"
            height="559px"
            alt="Epargnez votre argent, épargnez la planète"
          />
        </MHidden>
      </Grid>
      <Dialogue open={open} modalClose={modalClose} />
    </RootStyle>
  );
}
