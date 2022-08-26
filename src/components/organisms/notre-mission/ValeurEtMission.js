import { styled } from "@mui/system";
import { Box, Grid, Typography, Button } from "@mui/material";
import valle_image from "../../../assets/images/valle_image.png";
import unicef_icon from "../../../assets/images/unicef_icon.png";
import {
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInUp,
} from "src/components/atoms/animate";
import { ODDDATA, VALEURSDATA } from "./NotreMission.constant";
import { MHidden } from "src/components/atoms/@material-extend";
import { CustomTextField } from "src/components/atoms/GeneralTextfield.style";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function ValeurEtMission() {
  return (
    <RootStyle>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <MHidden width="mdDown">
          <Grid>
            <Box
              component="img"
              src={valle_image}
              sx={{
                width: "457px",
                height: "931px",
              }}
            />
          </Grid>
        </MHidden>
        <Grid item xs={12} md={8}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "38px",
                fontWeight: 800,
                color: "#10403B",
                lineHeight: { md: "57px", xs: "50px" },
                mt: {
                  md: 10,
                  xs: 10,
                },
              }}
            >
              Nos{" "}
              <span style={{ color: { md: "#C4E3D6", xs: "#10403B" } }}>
                valeurs
              </span>{" "}
              &<span style={{ color: "#C4E3D6" }}> engagements</span>
            </Typography>
            <Typography
              sx={{
                color: "#10403B",
                fontFamily: "Lora",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: 400,
                lineHeight: "27px",
                mt: { md: 8, xs: 4 },
                mb: { md: 6, xs: 10 },
              }}
            >
              4 valeurs profondément ancrées dans notre ADN, nous animent au
              quotidien.
            </Typography>
          </MotionInView>
          {VALEURSDATA.map((item) => (
            <Grid
              container
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "space-around",
                mb: { md: 0, xs: 6 },
              }}
            >
              <MHidden width="mdDown">
                <Grid
                  item
                  sx={{
                    ml: { md: -96, xs: -35 },
                    mt: { md: 6, xs: 20 },
                    marginBlock: -12,
                  }}
                >
                  <Box component="img" src={item.icon} alt={item.title} />
                </Grid>
              </MHidden>
              <Grid item sx={{ ml: { md: 21, xs: 2 } }}>
                <MotionInView variants={varFadeInDown}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                      color: "#C4E3D5",
                      lineHeight: 0.9,
                      mb: { md: 2, xs: 4 },
                    }}
                  >
                    {item.title}
                  </Typography>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Typography
                    sx={{
                      fontSize: "19px",
                      lineHeight: 1.4,
                      fontWeight: 400,
                      textAlign: "start",
                      color: "#10403B",
                      mb: "20px",
                    }}
                  >
                    {item.paragraphe}
                  </Typography>
                </MotionInView>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "1rem",
            xs: 0,
          },
          width: "95vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={6} lg={4.7}>
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              alt="Image d'une pièce d'hero "
              src={unicef_icon}
              sx={{
                borderRadius: 2,
                ml: { md: 15, xs: 5 },
                mt: 8,
              }}
            />
            <Grid
              container
              direction={{ xs: "row", sm: "row" }}
              sx={{
                display: "flex",
                width: { md: "55vw", xs: "90%" },
                ml: { md: 0, xs: 5 },
                mt: 5,
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
                        width: "83px",
                        height: "80px",
                      }}
                    />
                  </MotionInView>
                </Grid>
              ))}
            </Grid>
          </MotionInView>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6.7}
          mt="1rem"
          ml={{ md: "1.5rem", xs: 0 }}
        >
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                display: "flex",
                margin: 0,
                lineHeight: "57px",
                fontWeight: 800,
                color: "#10403B",
                fontSize: "38px",
              }}
            >
              Nous nous engageons dans la réalisation des ODD de l’ONU !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontFamily: "Lora",
                mb: 0,
                mt: 6,
                fontSize: "20px",
                lineHeight: "27px",
                fontWeight: 400,
              }}
            >
              Le meilleur moyen de passer à l’action, c’est de s’y mettre.
              <br /> <br /> Nous nous engageons à remplir notre mission selon le
              référentiel commun des 17 <br /> ODD : 17 objectifs de
              développement durable qui visent à réduire la pauvreté,
              <br /> réduire les inégalités et lutter contre les dérèglements
              climatiques afin de créer
              <br /> un monde plus durable et plus équitable.
              <br /> <br /> Nous nous attachons particulièrement aux 6 des ODD
              (2 – Faim zéro, 10 –<br /> Inégalités réduites, 12- Consommation &
              production responsables, 13- Mesures
              <br /> relatives à la lutte contre le réchauffement climatique,
              15- Vie terrestre et 17 –<br /> Partenariats pour la réalisation
              des objectifs).
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mb: -10,
          height: "382px",
          background: "#C4E3D5",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            color: "#10403B",
            fontWeight: 700,
            textAlign: "24px",
          }}
        >
          Rejoins la communauté
        </Typography>
        <MotionInView variants={varFadeInUp}>
          <CustomTextField type="email" placeholder="* votre@email.com" />
        </MotionInView>
        <Button
          sx={{
            variant: "contained",
            borderRadius: 50,
            background: "#10403B !important",
            "&:hover": { background: "#2A7267 !important" },
            boxShadow: "none",
            color: "#fff",
            fontSize: "16px",
            padding: "7px 38px 10px 38px",
          }}
        >
          M'abonner
        </Button>
      </Box>
    </RootStyle>
  );
}
