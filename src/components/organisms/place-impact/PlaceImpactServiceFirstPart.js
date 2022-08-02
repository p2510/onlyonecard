import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInLeft, varFadeInUp } from "../../atoms/animate";
import { EPARGNERIMAGEDATA, INVESTIRIMAGEDATA } from "./PlaceImpact.constant";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function PlaceImpactServiceFirstPart() {
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
            fontSize: "52px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",
            mt: {
              md: 28,
              xs: 15,
            },
          }}
        >
          La Place Impact vous donne accès à des <br /> services écologiques,
          solidaires et
          <br /> innovants.
        </Typography>
      </Grid>
      <Container
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} ml="2rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.4,
                mb: 5,
                margin: "0px 0px 20px",
                mt: {
                  md: 10,
                  xs: 15,
                },
              }}
            >
              Ces services vous permettent d’aller encore plus loin avec votre
              argent et de le mettre au service de la planète, tout en <br />{" "}
              gagnant du temps et de l’argent !
            </Typography>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 800,
                lineHeight: 1,
                mb: "1rem",
                mt: {
                  md: 8,
                  xs: 15,
                },
              }}
            >
              <span>Epargner</span>
              <span style={{ color: "#00bd85" }}>.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.4,
                margin: "0px 0px 20px",
              }}
            >
              Devenez propriétaire d’arbres sur des massifs forestiers gérés
              durablement ou épargnez dans des fonds qui financent <br /> des
              entreprises et des projets durables.
            </Typography>
          </MotionInView>
        </Grid>
      </Container>
      <Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mt: "-1.5rem",
          mb: {
            md: 4,
            xs: 8,
          },
        }}
      >
        {EPARGNERIMAGEDATA.map((item) => (
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
                  width: "170px",
                  height: "160px",
                }}
              />
            </MotionInView>
          </Grid>
        ))}
      </Container>
      <Container
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} ml="2rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 800,
                lineHeight: 1,
                mb: "1rem",
                mt: {
                  md: 3,
                  xs: 15,
                },
              }}
            >
              <span>Investir</span>
              <span style={{ color: "#00bd85" }}>.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.4,
                margin: "0px 0px 20px",
              }}
            >
              Investissez dans des start-ups et des PME à impact positif,
              devenez actionnaire d’une société à but non lucratif luttant
              <br />
              contre le dérèglement climatique ou investissez dans les projets
              de vos territoires avec des prêts rémunérés !
            </Typography>
          </MotionInView>
        </Grid>
      </Container>
      <Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mt: "-1.5rem",
        }}
      >
        {INVESTIRIMAGEDATA.map((item) => (
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
                  width: "170px",
                  height: "160px",
                }}
              />
            </MotionInView>
          </Grid>
        ))}
      </Container>
    </RootStyle>
  );
}
