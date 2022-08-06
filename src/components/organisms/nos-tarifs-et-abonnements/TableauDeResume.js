import * as React from "react";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { Container, Box, Typography, Stack, Button, Card } from "@mui/material";
import { TABLEAUDERESUMEDATA } from "./nosTarifsEtAbonnements.constant";
import Iconify from "src/components/atoms/Iconify";
import abonnement from "../../../assets/images/abonnement.png";
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
} from "src/components/atoms/animate";
import { MHidden } from "src/components/atoms/@material-extend";
import Logo from "src/components/atoms/Logo";

export default function TableauDeResume() {
  return (
    <Box sx={{ width: "100%", mb: "10rem", mt: -12 }}>
      {TABLEAUDERESUMEDATA.map((item) => (
        <Container key={item.id}>
          <Box
            sx={{
              backgroundColor: `${item.title ? "#f9f9fb" : "#fff"}`,
              mb: `${item.title ? "20px" : "0px"}`,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                color: "#00db89",
                lineHeight: 1.33,
                fontWeight: 600,
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
            <Grid item xs={6} fontSize={{ md: "18px", xs: "9px" }}>
              {item.libelle}
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  {item.icon ? (
                    <Typography
                      sx={{
                        ml: {
                          md: 4,
                          xs: -14,
                        },
                      }}
                    >
                      {<CheckIcon color="primary" />}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        width: "160px",
                        fontSize: {
                          md: "16px",
                          xs: "13px",
                        },
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
                    <Typography
                      sx={{
                        ml: {
                          md: 16.5,
                          xs: -2,
                        },
                      }}
                    >
                      {<CheckIcon color="primary" />}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: {
                          md: "16px",
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
      <Typography
        sx={{
          fontSize: "20px",
          textAlign: "center",
          color: "#00db89",
          fontWeight: "bold",
          mt: {
            md: "5rem",
            xs: "4rem",
          },
          mb: {
            md: "3rem",
            xs: "1rem",
          },
        }}
      >
        Grille tarifaire complète Compte Impact 2021 : cliquez ici
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
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
            mt: "3rem",
          }}
        >
          <MotionInView variants={varFadeInLeft}>
            <Box
              sx={{
                bgcolor: "#191717",
                borderRadius: "10px",
                mr: "2rem",
              }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{
                  border: "solid",
                  height: "70px",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#191717",
                  },
                }}
                startIcon={<Iconify icon="bi:apple" width={40} height={50} />}
              >
                <Stack direction={{ xs: "column", md: "column" }}>
                  <Typography fontSize="18px">Télécharger dans</Typography>
                  <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                    l'App Store
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </MotionInView>
          <MotionInView variants={varFadeInRight}>
            <Box
              sx={{
                bgcolor: "#191717",
                margin: "10px",
                borderRadius: "10px",
              }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{
                  boxShadow: "none",
                  height: "70px",
                  "&:hover": {
                    bgcolor: "#191717",
                  },
                }}
                startIcon={
                  <Iconify
                    icon="teenyicons:google-play-store-solid"
                    width={40}
                    height={50}
                  />
                }
              >
                <Stack direction={{ xs: "column", md: "column" }}>
                  <Typography sx={{ fontSize: { md: "18px", xs: "12px" } }}>
                    Disponibe sur
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        md: "22px",
                        xs: "12px",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    Google Play
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </MotionInView>
        </Grid>
      </Container>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "37.5px",
          lineHeight: 1.3,
          fontWeight: 600,
          ml: {
            md: -26,
            xs: 0,
          },
          mt: "6rem",
        }}
      >
        Profitez d’un abonnement au prix de la transparence
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 14,
          mt: {
            md: "2rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={5.9}>
            <MotionInView variants={varFadeInUp}>
              <Card
                sx={{
                  width: { md: 520, xs: 260 },
                  borderRadius: 0,
                }}
              >
                <Box
                  component="img"
                  alt="Image d'une pièce d'hero "
                  src={abonnement}
                  sx={{
                    borderRadius: 0,
                    width: "100%",
                    height: "36vw",
                  }}
                />
              </Card>
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6} lg={6}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 6,
                fontSize: "20px",
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              Nos services payants nous permettent d’agir <br /> concrètement en
              vous proposant des services innovants, <br /> écologiques et
              solidaires à un tarif juste inférieur à la <br /> moyenne du
              marché. <br /> <br /> En effet, selon une étude sur 151 banques en
              France <br /> métropolitaine soit 95% de parts du marché, les
              frais <br /> bancaires moyens par client s’établit à environ 18
              euros <br /> par mois (215,10 € en moyenne par an). <br />
              <br />
              <span style={{ fontStyle: "italic" }}>
                Source: le comparateur de banque Panorabanques.com
              </span>
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        Rejoignez le mouvement des citoyens d’un monde bancaire responsable
      </Typography>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 14,
        }}
      >
        <Logo />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            alignItems: "center",
            mb: -11,
            mt: {
              md: 1,
            },
          }}
        >
          Conciliez votre argent et vos valeurs
        </Typography>
      </Grid>
    </Box>
  );
}
