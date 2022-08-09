import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInDown, varFadeInUp } from "../../atoms/animate";
import { ACTIONSDATA } from "./ActionEtEmpreinteCarbone.constant";
import CheckIcon from "@mui/icons-material/Check";
import { MHidden } from "../../atoms/@material-extend";
import TButton from "src/components/atoms/tailwindComponent/TButton";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function ActionEtEmpreinteCarbone() {
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
            fontSize: "50px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",
            mt: {
              md: 24,
              xs: 15,
            },
          }}
        >
          Un éco-coach pour transformer vos <br /> bonnes intentions en actions{" "}
          <span
            style={{
              height: "5px",
              width: "5px",
              borderRadius: "50px",
              bgcolor: "#333",
            }}
          >
            {" "}
          </span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: "center",
            fontSize: "24px",
            mt: 2,
            mb: 3,
          }}
        >
          Calculez, comprenez et réduisez votre empreinte carbone
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
            xs: 8,
          },
          mt: 7,
        }}
      >
        <Grid
          Container
          direction={{ xs: "column", sm: "row" }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            top: {
              xs: -70,
              md: -40,
            },
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
                marginRight: "2rem",
                width: "330px",
              }}
            >
              <MotionInView variants={varFadeInUp}>
                <Box
                  component="img"
                  src={item.icon}
                  sx={{
                    width: "120px",
                    height: "105px",
                  }}
                />
              </MotionInView>
              <MotionInView variants={varFadeInDown}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    mt: 1,
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
                  <Typography>
                    {<CheckIcon color="primary" sx={{ mr: "0.7rem" }} />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "inherit",
                      color: "#4a4e57",
                    }}
                  >
                    {item.paragraphe}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    mt: "15px",
                  }}
                >
                  <Typography>
                    {<CheckIcon color="primary" sx={{ mr: "0.7rem" }} />}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "inherit",
                      color: "#4a4e57",
                    }}
                  >
                    {item.paragraphe2}
                  </Typography>
                </Box>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
      <MHidden width="mdDown">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { md: -9, xs: 16 },
          }}
        >
          <TButton name="Ouvrir un compte écologique" link="" />
        </Grid>
      </MHidden>
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
            fontSize: "35px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",
            mt: {
              md: 24,
              xs: 15,
            },
          }}
        >
          Saviez-vous que chaque Français doit réduire son empreinte carbone de
          <br />
          80% ?
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: "center",
            fontSize: "18px",
            mt: 5.5,
            mb: 3,
          }}
        >
          Chaque Français doit passer de 11 tonnes de CO2e par an à 2 tonnes
          pour contenir la hausse de la température moyenne en dessous de +2°C.
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: "center",
            fontSize: "18px",
            mb: 8.5,
          }}
        >
          En s’appuyant sur la base carbone de l’ADEME, OnlyOne a conçu un
          algorithme capable d’estimer en temps réel l’empreinte carbone de
          chaque <br /> transaction effectuée par carte de paiement !
        </Typography>
      </Grid>
      <MHidden width="mdDown">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { md: -9, xs: 16 },
          }}
        >
          <TButton name="Comment estimer mon empreinte carbone ?" link="" />
        </Grid>
      </MHidden>
    </RootStyle>
  );
}
