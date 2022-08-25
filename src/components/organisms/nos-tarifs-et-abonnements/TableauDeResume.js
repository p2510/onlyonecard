import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography, Button, Divider } from "@mui/material";
import { TABLEAUDERESUMEDATA } from "./nosTarifsEtAbonnements.constant";
import citoyens_image_2 from "../../../assets/images/citoyens_image_2.png";
import only_name from "../../../assets/images/only_name.svg";
import google_play_icon from "../../../assets/images/google_play_icon.svg";
import app_store_icon from "../../../assets/images/app_store_icon.svg";
import ocean_image from "../../../assets/images/ocean_image.png";
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
} from "src/components/atoms/animate";

export default function TableauDeResume() {
  return (
    <Box sx={{ width: "100%", mb: "10rem", mt: -12 }}>
      {TABLEAUDERESUMEDATA.map((item) => (
        <Container key={item.id}>
          <Box
            sx={{
              backgroundColor: `${item.title ? "#E4D6C0" : "#fff"}`,
              mb: `${item.title ? "20px" : "0px"}`,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                color: "#10403B",
                lineHeight: "36px",
                fontWeight: 700,
                padding: 1.5,
              }}
            >
              {item.title}
            </Typography>
          </Box>
          <Grid
            container
            spacing={22}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Grid item xs={6} color="primary">
              <Typography
                sx={{
                  fontFamily: "Lora",
                  fontWeight: 400,
                  fontSize: { md: "20px", xs: "9px" },
                  color: "#10403B",
                }}
              >
                {item.libelle}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  {item.icon ? (
                    <Box
                      component="img"
                      src={item.icon}
                      alt="Vous pourrez bientôt économisez jusqu’à 20 % en choisissant l’abonnement annuel"
                      sx={{
                        ml: {
                          md: 4,
                          xs: -14,
                        },
                      }}
                    />
                  ) : (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Lora",
                        color: "#10403B",
                        textAlign: "center",
                        fontWeight: 400,
                        width: "160px",
                        fontSize: { md: "20px", xs: "9px" },
                        ml: {
                          md: -4,
                          xs: -22,
                        },
                      }}
                    >
                      {item.valeurParAn}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={3} md={6}>
                  {item.icon ? (
                    <Box
                      component="img"
                      src={item.icon}
                      alt="Vous pourrez bientôt économisez jusqu’à 20 % en choisissant l’abonnement annuel"
                      sx={{
                        ml: {
                          md: 16.5,
                          xs: -2,
                        },
                      }}
                    />
                  ) : (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "Lora",
                        textAlign: "center",
                        color: "#10403B",
                        fontWeight: 400,
                        fontSize: {
                          md: "20px",
                          xs: "13px",
                        },
                        ml: {
                          md: 6,
                          xs: -3,
                        },
                      }}
                    >
                      {item.valeurParMois}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      ))}
      <Container>
        <Divider
          color="#10403B"
          sx={{
            height: "1.5px",
            mb: { md: 7, xs: 0 },
            mt: { md: 6, xs: 2 },
          }}
        />
      </Container>
      <Typography
        sx={{
          fontSize: "24px",
          textAlign: "center",
          color: "#10403B",
          fontWeight: 700,
          mt: {
            md: "4rem",
            xs: "4rem",
          },
          mb: {
            md: "2.5rem",
            xs: "1rem",
          },
        }}
      >
        Grille tarifaire complète Compte Impact 2021 :
        <span style={{ color: "#C4E3D5" }}> cliquez ici</span>
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "24px",
          color: "#B7795E",
          fontWeight: 700,
        }}
      >
        Téléchargez l’application et commencez votre souscription
      </Typography>

      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mt: "4rem",
          }}
        >
          <MotionInView variants={varFadeInLeft}>
            <Button>
              <Box
                component="img"
                src={app_store_icon}
                alt="télécharger dans l'app store"
                sx={{ padding: "0px 50px 0px 0px" }}
              />
            </Button>
          </MotionInView>
          <MotionInView variants={varFadeInRight}>
            <Button>
              <Box
                component="img"
                src={google_play_icon}
                alt="disponible sur google play"
                sx={{ padding: "0px 0px 0px 50px" }}
              />
            </Button>
          </MotionInView>
        </Grid>
      </Container>
      <Grid sx={{ display: "flex", justifyContent: "space-between", mt: 12 }}>
        <Box component="img" src={ocean_image} />
        <Box
          sx={{
            width: "80%",
            height: "668px",
            bgcolor: "#10403B",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "38px", xs: "22px" },
              color: "#fff",
              fontWeight: 800,
              lineHeight: "57px",
              margin: "66px 73px 70px 97px",
            }}
          >
            Profitez d’un abonnement au prix de la
            <span style={{ color: "#C4E3D5" }}> transparence</span>
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Lora",
              margin: "0px 0px 0px 97px",
              fontSize: "20px",
            }}
          >
            Nos services payants nous permettent d’agir concrètement en vous
            proposant des services
            <br /> innovants, écologiques et solidaires à un tarif juste
            inférieur à la moyenne du marché.
            <br />
            <br /> En effet, selon une étude sur 151 banques en France
            métropolitaine soit 95% de parts du
            <br /> marché, les frais bancaires moyens par client s’établit à
            environ 18 euros par mois (215,10 €<br /> en moyenne par an).
            <br />
            <br />
            <span style={{ fontStyle: "italic" }}>
              Source: le comparateur de banque Panorabanques.com
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { md: "38px", xs: "22px" },
            color: "#10403B",
            fontWeight: 800,
            lineHeight: "57px",
            margin: "86px 0px 43px 0px",
          }}
        >
          Rejoignez le mouvement des citoyens d’un
          <br /> monde bancaire responsable
        </Typography>
        <Box
          component="img"
          src={citoyens_image_2}
          alt="Rejoignez le mouvement des citoyens"
          sx={{ margin: "0px 0px -150px 0px" }}
        />
        <Box
          component="img"
          src={only_name}
          alt="Rejoignez le mouvement des citoyens"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { md: "32px", xs: "22px" },
            color: "#10403B",
            fontWeight: 700,
            lineHeight: "48px",
            margin: "41px 0px -73px 0px",
          }}
        >
          Conciliez votre <span style={{ color: "#C4E3D5" }}>argent</span> et
          vos <span style={{ color: "#C4E3D5" }}>valeurs</span>
          <span style={{ color: "#C4E3D5" }}>.</span>
        </Typography>
      </Grid>
    </Box>
  );
}
