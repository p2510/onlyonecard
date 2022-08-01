import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInUp,
} from "src/components/animate";
import {
  VIEQUOTIDIENNEDATA,
  DONSDATA,
  ASSURERIMAGEDATA,
  DATA,
} from "./PlaceImpact.constant";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function PlaceImpactServiceSecondPart() {
  return (
    <RootStyle>
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
                mt: "-3rem",
                mb: "1rem",
              }}
            >
              <span>Assurer</span>
              <span style={{ color: "#00bd85" }}>.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.4,
                mb: 5,
                margin: "0px 0px 20px",
              }}
            >
              Découvrez une assurance habitation simple, transparente et éthique
              et assurez votre téléphone en ligne ou faites le <br /> réparer
              facilement.
            </Typography>
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
              {ASSURERIMAGEDATA.map((item) => (
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
                        height: "140px",
                      }}
                    />
                  </MotionInView>
                </Grid>
              ))}
            </Container>
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
              <span>Vie quotidienne</span>
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
              Passez à un fournisseur d’électricité verte, locale et d’intérêt
              général, achetez à prix réduit les invendus de vos <br />
              commerçants et offrez une carte cadeau écologique et solidaire !
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
          mt: "-0.5rem",
          mb: {
            md: 4,
            xs: 8,
          },
        }}
      >
        {VIEQUOTIDIENNEDATA.map((item) => (
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
                  height: "120px",
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
              <span>Dons</span>
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
              Luttez contre les inégalités et protégez la biodiversité.
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
          mb: {
            md: 8,
            xs: 8,
          },
        }}
      >
        {DONSDATA.map((item) => (
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
                  width: "190px",
                  height: "160px",
                }}
              />
            </MotionInView>
          </Grid>
        ))}
      </Container>
      <Container
        spacing={10}
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
              display: "flex",
              justifyContent: "center",
              fontSize: "2.2rem",
              fontWeight: "bold",
              alignItems: "center",
              mb: 3,
              mt: {
                md: 1,
              },
            }}
          >
            <span>Agissez pour la planète et comme pour vous </span>
            <span style={{ color: "#00db89" }}>!</span>
          </Typography>
        </Grid>
        <Grid
          Container
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
            top: {
              xs: -70,
              md: -40,
            },
          }}
        >
          {DATA.map((item) => (
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
                    width: "150px",
                    height: "110px",
                  }}
                />
              </MotionInView>

              <MotionInView variants={varFadeInDown}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{ fontSize: "18px", width: "320px", textAlign: "center" }}
                >
                  {item.paragraphe}
                </Typography>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
