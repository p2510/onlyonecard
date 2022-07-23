import { Box, Grid, Typography, Container } from "@mui/material";
import { PropTypes } from "prop-types";
import { MotionInView, varFadeInDown, varFadeInUp } from "./animate";

Banques.propTypes = {
  data: PropTypes.any,
  sx: PropTypes.any,
};

export default function Banques({ data, sx }) {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid Container direction={{ xs: "column", sm: "row" }} sx={sx}>
        {data.map((item) => (
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
