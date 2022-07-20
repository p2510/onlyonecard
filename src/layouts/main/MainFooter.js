import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Link,
  Typography,
  IconButton,
  Button,
  Stack,
  Box,
  Divider,
  TextField,
} from "@mui/material";
import Logo from "../../components/Logo";
import Iconify from "../../components/Iconify";
import {
  LINKS,
  CONDITIONLINKS,
  RootStyle,
  SOCIALS,
} from "./MainFooter.constants";
import MotionInView from "../../components/animate/MotionInView";
import {
  varFadeInLeft,
  varFadeInUp,
} from "../../components/animate/variants/fade/";
import { LoadingButton } from "@mui/lab";

export default function MainFooter() {
  const currentDate = new Date();

  return (
    <RootStyle>
      <Grid
        container
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{
          textAlign: { xs: "center", md: "left" },
          color: "common.white",
          width: "94vw",
          mx: "auto",
          mb: "-5rem",
          mt: "3rem",
          pb: 20,
        }}
      >
        <Grid item xs={12} md={2.5}>
          <Logo
            sx={{
              width: { md: 190, xs: 140 },
              height: { md: 50, xs: 40 },
              objectFit: "cover",
            }}
          />
          <MotionInView variants={varFadeInLeft}>
            <Button
              size="large"
              variant="contained"
              sx={{
                mt: "40px",
                mb: "15px",
                bgcolor: "black",
                border: "solid",
                "&:hover": {
                  bgcolor: "#191717",
                },
              }}
              startIcon={<Iconify icon="bi:apple" width={22} height={35} />}
            >
              <Stack direction={{ xs: "column", md: "column" }}>
                <Typography fontSize="12px">Télécharger avec</Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  l'App Store
                </Typography>
              </Stack>
            </Button>
          </MotionInView>
          <MotionInView variants={varFadeInLeft}>
            <Button
              size="large"
              variant="contained"
              sx={{
                mb: "60px",
                bgcolor: "black",
                border: "solid",
                "&:hover": {
                  bgcolor: "#191717",
                },
              }}
              startIcon={
                <Iconify
                  icon="teenyicons:google-play-store-solid"
                  width={30}
                  height={35}
                />
              }
            >
              <Stack direction={{ xs: "column", md: "column" }}>
                <Typography fontSize="12px">Disponibe sur</Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Google Play
                </Typography>
              </Stack>
            </Button>
          </MotionInView>
          <Typography fontSize="1.1rem" sx={{ pr: { md: 5 } }}>
            Contactez nous
          </Typography>
          <Typography fontSize="1.1rem" sx={{ pr: { md: 5 } }}>
            Prenons RDV
          </Typography>
        </Grid>
        <Grid item xs={8} md={7}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-around"
          >
            {LINKS.map((list) => {
              const { headline, children } = list;
              return (
                <Stack key={headline} spacing={3}>
                  <Typography component="p" fontSize="1.1rem" mb="1.5rem">
                    {headline}
                  </Typography>
                  {children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      fontSize="1rem"
                      component={RouterLink}
                      sx={{ display: "block" }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Typography fontSize="1.1rem" sx={{ pr: { md: 5 } }}>
            Rester informé et recevoir les chroniques de la finance et de
            l’impact
          </Typography>
          <Stack
            spacing={1.5}
            direction="row"
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ mt: 6, mb: { xs: 5, md: 6 } }}
          >
            {SOCIALS.map((social) => (
              <IconButton
                key={social.name}
                sx={{ p: 1, color: "common.white", bgcolor: "#333333" }}
              >
                <Icon icon={social.icon} width={25} height={25} />
              </IconButton>
            ))}
          </Stack>
          <Stack>
            <MotionInView variants={varFadeInUp}>
              <TextField
                fullWidth
                type="email"
                sx={{ bgcolor: "#fff", borderRadius: "7.5px" }}
                label="* votre@email.com"
              />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <LoadingButton
                type="submit"
                size="medium"
                variant="contained"
                sx={{
                  backgroundImage:
                    "linear-gradient(to top, #41d0f5, #19c2a8  )",
                  fontSize: "15px",
                  width: "8rem",
                  "&:hover": { backgroundPosition: "left" },
                  padding: "10px",
                  mt: "10px",
                }}
              >
                M'abonner
              </LoadingButton>
            </MotionInView>
          </Stack>
        </Grid>
      </Grid>
      <Box
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "center" },
          paddingBottom: "15px",
          margin: "15px",
          color: "#fff",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-around"
        >
          {CONDITIONLINKS.map((list) => {
            const { headline, children } = list;
            return (
              <Stack key={headline}>
                <Typography sx={{ fontSize: { md: 14, xs: "12.7px" } }}>
                  {children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      component={RouterLink}
                      sx={{ display: "block" }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        <Typography
          fontSize={{ xs: "12.7px", md: "11.5px" }}
          mt={{ xs: "15px" }}
        >
          © 2019 - {currentDate.getFullYear()} Only One SAS | Le compte à impact
          positif
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box
        sx={{
          p: 0,
          alignItems: "center",
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: { md: 14, xs: 10 },
            textAlign: "center",
            width: "93vw",
            mx: "auto",
            pt: "10px",
            pb: "15px",
            color: "#fff",
          }}
        >
          Only One, société immatriculée au registre du commerce et des sociétés
          de Paris sous le numéro 844 754 077, exploitant le nom commercial
          OnlyOne est enregistrée par l’Autorité de Contrôle Prudentiel et de
          Résolution (ACPR acpr.banque-france.fr) sous l'identifiant REGAFI
          85585 (agrément consultable dans le Registre des agents financiers
          www.regafi.fr) en tant qu’agent de services de paiement de
          l'établissement de monnaie électronique Treezor, dont le siège social
          est situé 41 rue de Prony, 75017 Paris.
        </Typography>
      </Box>
    </RootStyle>
  );
}
