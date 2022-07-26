import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInUp,
} from "src/components/animate";
import { ODDDATA, PARTENAIREDATA, VALEURSDATA } from "./NotreMission.constant";
import { MHidden } from "src/components/@material-extend";
import developpement_durable from "../../assets/images/developpement_durable.png";
import CommunautesInput from "src/components/CommunautesInput";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const titre = (
  <Typography
    sx={{
      fontSize: "37px",
      fontWeight: 600,
      textAlign: "start",
      margin: "0px",
      mb: 6,
      mt: 10,
      ml: -18,
    }}
  >
    Rejoignez le mouvement d’un nouveau monde bancaire, <br /> écologique,
    transparent et sécurisé.
  </Typography>
);

// ----------------------------------------------------------------------

export default function Partenaires() {
  return (
    <RootStyle>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",
            mt: {
              md: 24,
              xs: 15,
            },
          }}
        >
          Notre mission est de concilier votre argent et vos <br /> valeurs
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: "center",
            fontSize: "24px",
            mt: 5,
            mb: 3,
          }}
        >
          Nous aidons à transformer vos bonnes intentions en actions, tout
          simplement.
        </Typography>
      </Grid>
      <Container
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
          mt: 7,
        }}
      >
        {PARTENAIREDATA.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight: "2rem",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: "450px",
                  height: "240px",
                }}
              />
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: 0.9,
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.4,
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {item.paragraphe}
              </Typography>
            </MotionInView>
          </Grid>
        ))}
      </Container>

      <Container
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "5rem",
        }}
      >
        <Grid item xs={12} md={6} lg={7.7}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 800,
                lineHeight: 1,
                mt: {
                  md: 24,
                  xs: 15,
                },
              }}
            >
              Mission
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                letterSpacing: "0px",
                mb: 5,
              }}
            >
              <br />
              Le compte OnlyOne souhaite faire de la banque, le catalyseur du
              changement. La banque doit être au cœur de l’économie réelle et
              servir de guide pour construire le monde de demain, plus durable,
              plus responsable et plus inclusif.
              <br /> <br />
              Bienvenue dans le mouvement d’un nouveau monde bancaire, au
              service du climat, de la biodiversité et de la société.
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: 600,
                lineHeight: 1.4,
                mt: {
                  md: 16,
                  xs: 15,
                },
              }}
            >
              Nos valeurs & engagements
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                mt: -2,
              }}
            >
              <br />4 valeurs profondément ancrées dans notre ADN, nous animent
              au quotidien.
            </Typography>
          </MotionInView>
        </Grid>
        {VALEURSDATA.map((item) => (
          <Grid
            container
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-around",
            }}
          >
            <Grid item sx={{ ml: -82, marginBlock: -12, mt: 10 }}>
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: "130px",
                  height: "120px",
                }}
              />
            </Grid>
            <Grid item sx={{ ml: 42 }}>
              <MotionInView variants={varFadeInDown}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: 0.9,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: 1.4,
                    fontWeight: 400,
                    textAlign: "start",
                    mb: "20px",
                  }}
                >
                  {item.paragraphe}
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        ))}
      </Container>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "7rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={5.8}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={developpement_durable}
                sx={{
                  borderRadius: 2,
                  width: "78%",
                  height: "18vw",
                  ml: 7,
                  mt: 15,
                }}
              />
              <Grid
                container
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  display: "flex",
                  width: "55vw",
                  mb: {
                    md: 7,
                    xs: 8,
                  },
                }}
              >
                {ODDDATA.map((item) => (
                  <Grid
                    item
                    key={item.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <MotionInView variants={varFadeInUp}>
                      <Box
                        component="img"
                        src={item.icon}
                        sx={{
                          width: "90px",
                          height: "100px",
                        }}
                      />
                    </MotionInView>
                  </Grid>
                ))}
              </Grid>
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6} lg={5.6} mt="1rem" ml="1.5rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                display: "flex",
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                margin: 0,
                lineHeight: 1.2,
                fontSize: 37,
              }}
            >
              Nous nous engageons dans la réalisation des ODD de l’ONU !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.75,
                mb: 4,
                mt: 6,
                fontSize: "20px",
                lineHeight: "1.3em",
                fontWeight: 400,
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontStyle: "normal",
                boxSizing: "border-box",
              }}
            >
              Le meilleur moyen de passer à l’action, c’est de s’y <br />
              mettre. <br /> <br /> Nous nous engageons à remplir notre mission
              selon le référentiel commun des 17 ODD : 17 objectifs de
              développement durable qui visent à réduire la pauvreté, réduire
              les inégalités et lutter contre les dérèglements climatiques afin
              de créer un monde plus durable et plus équitable. <br /> <br />
              Nous nous attachons particulièrement aux 6 des ODD (2 <br /> –
              Faim zéro, 10 – Inégalités réduites, 12- Consommation & production
              responsables, 13- Mesures relatives à la lutte contre le
              réchauffement climatique, 15- Vie terrestre et 17 <br /> –
              Partenariats pour la réalisation des objectifs).
            </Typography>
          </MotionInView>
        </Grid>
        <CommunautesInput
          sx={{ fontSize: "32px", textAlign: "center" }}
          title={titre}
          inputStyle={{ ml: "-2.5rem", mt: -6, mb: -20 }}
          buttonStyle={{ mr: "28.5rem" }}
        />
      </Grid>
    </RootStyle>
  );
}
