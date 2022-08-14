import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import onlyone_carte from "../../../assets/images/onlyone_carte.png";
import plan from "../../../assets/images/plan.png";
import telephone from "../../../assets/images/telephone_image.png";
import montagne from "../../../assets/images/montagne.png";
import cercle from "../../../assets/images/cercle.png";
import PropTypes from "prop-types";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from "src/components/atoms/animate";
import { VALEURANDENGAGEMENTDATA } from "./CompteEcologiqueEtEthique.constant";
import { MHidden } from "src/components/atoms/@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

OuvrirUnCompte.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function OuvrirUnCompte() {
  return (
    <RootStyle>
      <Grid
        sx={{
          mt: 15,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "584px",
            ml: { md: "2rem", xs: 0 },
          }}
        >
          <Container>
            <Typography
              sx={{
                font: "Poppins",
                ml: "5000px",
                fontSize: { md: "42px", xs: "24px" },
                color: "#10403B",
                fontWeight: 900,
                lineHeight: { md: "63px", xs: "35px" },
                fontStyle: "normal",
                margin: "0px 73px 10px 68px",
                marginTop: { md: "39px", xs: "10px" },
              }}
            >
              Ouvrir un compte écologique <br /> et éthique en 5 min !
            </Typography>
            <Typography
              sx={{
                color: "#10403B",
                fontFamily: "Lora",
                margin: "0px 49px 69px 68px",
                fontSize: "18px",
              }}
            >
              À partir de votre compte, vous gérez votre argent, comme vos
              bonnes <br /> actions, sans compromis avec la sécurité et les
              fonctionnalités digitales. <br /> <br />
              <span style={{ fontWeight: "bold", color: "#0D8A7D" }}>
                C’est simple et c’est bien.
              </span>
            </Typography>
          </Container>
        </Box>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={cercle}
            alt="Epargnez votre argent, épargnez la planète"
            sx={{
              width: "147.08px",
              height: "135px",
              mt: "49px",
              mr: "-120px",
            }}
          />
        </MHidden>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={onlyone_carte}
            alt="Epargnez votre argent, épargnez la planète"
            sx={{ width: "467px", height: "459px", zIndex: 6, mt: 4.5 }}
          />
        </MHidden>
      </Grid>
      <Grid>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={plan}
            alt="Eco-compte Onlyone"
            sx={{
              position: "absolute",
              width: "100%",
              height: "1873.54px",
              mt: -29,
            }}
          />
          <Box
            component="img"
            src={telephone}
            alt="Eco-compte Onlyone"
            sx={{
              width: "284px",
              height: "489.21px",
              position: "absolute",
              zIndex: 6,
              mt: "-315.56px",
              ml: "203px",
            }}
          />
        </MHidden>
        <Button
          variant="contained"
          sx={{
            borderRadius: 50,
            bgcolor: "#FAAA42 !important",
            "&:hover": { bgcolor: "#f7b96c !important" },
            boxShadow: "none",
            mt: "3px",
            mr: { md: "140px", xs: 0 },
            marginLeft: { md: "35rem", xs: 0 },
            fontSize: "16px",
            padding: "8px 38px 8px 38px",
            marginTop: "-16rem",
          }}
        >
          C'est parti !
        </Button>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            mt: -5,
            mb: 69,
          }}
        >
          <Typography
            sx={{
              fontSize: "38px",
              fontWeight: 800,
              lineHeight: "57px",
              color: { md: "#fff !important", xs: "red" },
              ml: { md: 36, xs: 0 },
              zIndex: 6,
            }}
          >
            Tous les services que l’on peut <br /> attendre d’un{" "}
            <span style={{ color: "#C4E3D5" }}>
              compte <br /> et bien au-delà
              <span style={{ color: "#FAAA42", borderRadius: "50%" }}>.</span>
            </span>
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: -55,
            mb: { md: 0, xs: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#C4E3D5",
              height: "644px",
              width: { md: "1196px", xs: "100%" },
              opacity: "70%",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              spacing={{ xs: 2, md: 11 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {VALEURANDENGAGEMENTDATA.map((item) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={3}
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: -3,
                    ml: -3,
                  }}
                >
                  <MotionInView variants={varFadeInUp}>
                    <Box component="img" src={item.icon} alt={item.title} />
                  </MotionInView>
                  <MotionInView variants={varFadeInDown}>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Lora",
                        textAlign: "center",
                        fontSize: { md: "20px", xs: "12px" },
                        fontWeight: 600,
                        lineHeight: "26px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </MotionInView>
                </Grid>
              ))}
            </Grid>
            <MotionInView variants={varFadeInUp}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 50,
                  bgcolor: "#10403B !important",
                  "&:hover": { bgcolor: "#2A7267 !important" },
                  margin: "3px 0px 50px 0px",
                  fontSize: "16px",
                  padding: "8px 48px 8px 40px",
                  mt: 6,
                }}
              >
                Cette fois, je démarre vraiment !
              </Button>
            </MotionInView>
          </Box>
        </Grid>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={montagne}
            alt="Eco-compte Onlyone"
            sx={{
              position: "abosolute",
              width: {
                md: "1441px",
                xs: "100%",
              },
              opacity: "98%",
              height: "938.71px",
              mt: -20,
            }}
          />
        </MHidden>
      </Grid>
    </RootStyle>
  );
}
