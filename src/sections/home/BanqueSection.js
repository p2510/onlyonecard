import { Box, Grid, Typography, Container } from "@mui/material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from "../../components/animate";
import Lock from "../../assets/images/Lock.png";
import { BANQUEDATA } from "./LandingSecondSection.constant";

export default function BanqueSection() {
  return (
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
        <Box
          component="img"
          src={Lock}
          alt="Lock"
          sx={{
            mb: 0.5,
            width: "120px",
            height: "120px",
          }}
        />
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
          Votre argent est en sécurité !
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
        {BANQUEDATA.map((item) => (
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
                  width: "110px",
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
              <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
                {item.paragraphe}
              </Typography>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
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
            fontSize: "18px",
            fontWeight: "bold",
            mb: 2,
            mt: 1,
          }}
        >
          Données cryptées et stockées en Europe
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Vos données telles que vos informations personnelles, vos identifiants
          ou encore vos numéros de comptes, sont cryptées et stockées en Europe
          pour plus de sécurité. Nous ne revendons pas et ne revendrons jamais
          vos données.
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            mb: 2,
            mt: 2,
          }}
        >
          Contrôle total
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Bloquez/débloquez votre carte et modifiez vos codes directement depuis
          l’application.
        </Typography>
      </Grid>
    </Container>
  );
}
