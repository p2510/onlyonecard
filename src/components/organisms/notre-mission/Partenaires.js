import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInDown, varFadeInUp } from "../../atoms/animate";
import { PARTENAIREDATA } from "./NotreMission.constant";
import { MHidden } from "../../atoms/@material-extend";
import arriere_plan_notre_mission from "../../../assets/images/arriere_plan_notre_mission.png";
import bras_image from "../../../assets/images/bras_image.png";
import cercle from "../../../assets/images/cercle.png";
import plage_image from "../../../assets/images/plage_image.png";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function Partenaires() {
  return (
    <RootStyle>
      <MHidden width="mdDown">
        <Grid container>
          <Box
            component="img"
            src={cercle}
            alt="Eco-compte Onlyone"
            sx={{
              mt: "240px",
              ml: "428px",
            }}
          />
          <Box
            component="img"
            src={arriere_plan_notre_mission}
            alt="Eco-compte Onlyone"
            sx={{
              width: "100%",
              position: "absolute",
              height: "686.49px",
              right: "2px",
              top: "337.51px",
            }}
          />
          <Box
            component="img"
            src={bras_image}
            alt="Eco-compte Onlyone"
            sx={{
              position: "absolute",
              width: "583px",
              height: "568px",
              left: "836px",
              top: "453px",
            }}
          />
        </Grid>
        <Box
          sx={{
            width: "80%",
            height: "584px",
            mt: 25,
            ml: "2rem",
          }}
        >
          <Typography
            sx={{
              font: "Poppins",
              ml: "5000px",
              height: "133px",
              top: "347px",
              fontSize: { md: "42px", xs: "22px" },
              color: "#fff",
              fontWeight: 900,
              lineHeight: "63px",
              fontStyle: "normal",
              opacity: 0.98,
              margin: "39px 73px 60px 68px",
            }}
          >
            Notre mission est de concilier
            <br />
            <span
              style={{ fontWeight: "bold", color: "#C4E3D5", marginLeft: 0.5 }}
            >
              votre argent
            </span>
            <span> et </span>
            <span style={{ fontWeight: "bold", color: "#C4E3D5" }}>
              vos valeurs
            </span>
            <span style={{ fontWeight: "bold", color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              color: "#fff",
              margin: "0px 49px 79px 68px",
              lineHeight: "48px",
              fontWeight: 700,
              opacity: 0.98,
            }}
          >
            Nous aidons à transformer vos bonnes <br /> intentions en actions,
            tout simplement.
          </Typography>
        </Box>
      </MHidden>

      <Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            md: 18,
            xs: 8,
          },
          mt: -10,
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
              <Box component="img" src={item.icon} alt={item.title} />
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "48px",
                  mt: 8,
                  mb: 6,
                }}
              >
                {item.title}
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "280px",
                    height: "211px",
                    background: "#E4D6C0",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lora",
                      fontSize: "18px",
                      lineHeight: "27px",
                      fontWeight: 400,
                      textAlign: "start",
                      margin: "0px 25px 0px 25px",
                    }}
                  >
                    {item.paragraphe}
                  </Typography>
                </Box>
              </Grid>
            </MotionInView>
          </Grid>
        ))}
      </Container>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "100%",
            height: "562px",
            bgcolor: "#10403B",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              height: "133px",
              top: "347px",
              fontSize: { md: "38px", xs: "22px" },
              color: "#fff",
              fontWeight: 900,
              lineHeight: "63px",
              fontStyle: "normal",
              margin: "70px 0px 0px 100px",
            }}
          >
            Mission
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Lora",
              margin: "-10px 0px 39px 100px",
              fontSize: "20px",
            }}
          >
            Le compte OnlyOne souhaite faire de la banque, le catalyseur du{" "}
            <br />
            changement. La banque doit être au cœur de l’économie réelle et
            servir <br /> de guide pour construire le monde de demain, plus
            durable, plus <br /> responsable et plus inclusif.
          </Typography>
          <Typography
            sx={{
              color: "#C4E3D5",
              margin: "0px 0px 69px 100px",
              fontWeight: 900,
              fontSize: "22px",
            }}
          >
            Bienvenue dans le mouvement d’un nouveau <br /> monde bancaire, au
            service du climat, de la <br /> biodiversité et de la société.
          </Typography>
        </Box>
        <Box
          component="img"
          src={plage_image}
          sx={{
            width: "646.45px",
            height: "562px",
          }}
        />
      </Grid>
    </RootStyle>
  );
}
