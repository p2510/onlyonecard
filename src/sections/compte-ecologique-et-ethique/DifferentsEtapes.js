import { Box, Grid, Typography, Container } from "@mui/material";
import { MHidden } from "src/components/@material-extend";
import CommunautesInput from "src/components/CommunautesInput";
import TButton from "src/components/tailwindComponent/TButton";
import { MotionInView, varFadeInUp } from "../../components/animate";
import {
  DIFFERENTSETAPESDATA,
  PARTENAIRELOGODATA,
} from "./CompteEcologiqueEtEthique.constant";

export default function DifferentsEtapes() {
  return (
    <Container
      spacing={2}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: -11,
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
            fontSize: "2.3rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 6,
            mt: {
              md: 19,
            },
          }}
        >
          L’impact positif pensé à toutes les étapes
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
        {DIFFERENTSETAPESDATA.map((item) => (
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
                sx={{
                  width: "170px",
                  height: "130px",
                }}
              />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography sx={{ fontSize: "18px", textAlign: "start" }}>
                {item.paragraphe}
              </Typography>
              <MHidden width="mdDown">
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: { md: 16, xs: 16 },
                    mt: 5,
                    width: 380,
                  }}
                >
                  <TButton name={item.title} />
                </Grid>
              </MHidden>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.4rem",
          fontWeight: "bold",
          lineHeight: 1.2,
          textAlign: "center",
          mb: 7,
        }}
      >
        Ouvrez un compte pour rejoindre le mouvement des <br /> citoyens au
        service du climat, de la biodiversité et de la société
      </Typography>
      <MotionInView variants={varFadeInUp}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { md: 13, xs: 16 },
          }}
        >
          <TButton name="J'ouvre un compte" link="/" />
        </Grid>
      </MotionInView>
      <CommunautesInput title="Rejoins la communauté" />
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
            fontSize: "1.8rem",
            fontWeight: "bold",
            alignItems: "center",
            mt: {
              md: 19,
            },
          }}
        >
          <span>Nos partenaires</span>
          <span style={{ color: "#00db89" }}>.</span>
        </Typography>
      </Grid>

      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          width: "100%",
          mb: {
            md: 7,
            xs: 8,
          },
        }}
      >
        {PARTENAIRELOGODATA.map((item) => (
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
                  width: "260px",
                  height: "200px",
                }}
              />
            </MotionInView>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
