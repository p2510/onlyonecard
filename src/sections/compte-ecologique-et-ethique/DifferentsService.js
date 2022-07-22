import { Box, Grid, Typography, Container } from "@mui/material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from "../../components/animate";
import { VALEURANDENGAGEMENTDATA } from "./CompteEcologiqueEtEthique.constant";
import TButton from "./../../components/tailwindComponent/TButton.js";

export default function DifferentsService() {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: "16rem",
      }}
    >
      <Grid
        item
        md={6}
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
            fontSize: "2.4rem",
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
            mb: 8,
            mt: {
              md: 19,
              xs: -12,
            },
          }}
        >
          Tous les services que l’on peut attendre d’un compte et bien au-delà.
        </Typography>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {VALEURANDENGAGEMENTDATA.map((item) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={3}
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MotionInView variants={varFadeInUp}>
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: "140px",
                    height: "80px",
                  }}
                />
              </MotionInView>

              <MotionInView variants={varFadeInDown}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "start",
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: "1.2em",
                    mt: 4,
                  }}
                >
                  {item.title}
                </Typography>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ ml: { md: 48 }, mt: 13 }}>
          <MotionInView variants={varFadeInUp}>
            <TButton name="Cette fois, je démarre vraiment !" link="/" />
          </MotionInView>
        </Box>
      </Box>
    </Container>
  );
}
