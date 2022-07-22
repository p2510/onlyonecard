import { LoadingButton } from "@mui/lab";
import {
  Box,
  Grid,
  Typography,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import lampe_icon from "../assets/images/lampe_icon.png";
import { MotionInView, varFadeInUp } from "./animate";
import Logo from "./Logo";

export default function Communautes() {
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
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.4rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 5,
            mt: {
              md: 1,
            },
          }}
        >
          Un Compte simple, sécurisé et responsable
        </Typography>
        <Box
          component="img"
          src={lampe_icon}
          alt="Lock"
          sx={{
            mb: 0.5,
            width: "150px",
            height: "115px",
          }}
        />
        <Logo />
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
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.7rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 5,
            mt: {
              md: 2,
            },
          }}
        >
          Conciliez votre argent et vos valeurs.
        </Typography>
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
            fontSize: "2.4rem",
            fontWeight: "bold",
            mb: 2,
            mt: 1,
          }}
        >
          Rejoins la communauté
        </Typography>
      </Grid>
      <Stack
        sx={{
          mb: 8,
          ml: {
            md: "15rem",
            xs: 0,
          },
        }}
      >
        <MotionInView variants={varFadeInUp}>
          <TextField
            type="email"
            sx={{
              bgcolor: "#fff",
              borderRadius: "7.5px",
              width: {
                md: "39rem",
                xs: "100%",
              },
            }}
            label="* votre@email.com"
          />
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <LoadingButton
            type="submit"
            size="medium"
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(to top, #41d0f5, #19c2a8  )",
              fontSize: "15px",
              "&:hover": { backgroundPosition: "left" },
              padding: "10px",
              mt: "10px",
            }}
          >
            M'abonner
          </LoadingButton>
        </MotionInView>
      </Stack>
    </Container>
  );
}
