import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Link,
  Typography,
  Button,
  Stack,
  Box,
  Divider,
  TextField,
} from "@mui/material";
import Logo from "../../../atoms/Logo";
import {
  LINKS,
  CONDITIONLINKS,
  RootStyle,
  SOCIALS,
} from "./MainFooter.constants";
import MotionInView from "../../../atoms/animate/MotionInView";
import google_play_logo from "../../../../assets/images/google_play_logo.svg";
import app_store_icon from "../../../../assets/images/app_store_icon.svg";
import {
  varFadeInLeft,
  varFadeInUp,
} from "../../components/animate/variants/fade/";
import TButton from "./../../components/tailwindComponent/TButton.js";

export default function MainFooter() {
  const currentDate = new Date();

  return (
    <RootStyle>
      <Grid
        container
        justifyContent={{ xs: "center", md: "space-around" }}
        sx={{
          textAlign: { xs: "center", md: "left" },
          color: "common.white",
          width: "93vw",
          mx: "auto",
          mb: "-7rem",
          mt: "3rem",
          pb: 20,
        }}
      >
        <Grid
          item
          xs={12}
          md={2.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: "-5.5rem",
          }}
        >
          <Logo
            sx={{
              width: { md: 142, xs: 80 },
              height: { md: 150, xs: 85 },
              mb: 4,
              mt: { md: 4, xs: 8 },
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInLeft}>
              <Button>
                <Link href="https://apps.apple.com/fr/app/onlyone-card/id1520016716">
                  <Box
                    component="img"
                    src={app_store_icon}
                    alt=""
                    sx={{
                      height: "70px",
                      width: "130px",
                    }}
                  />
                </Link>
              </Button>
            </MotionInView>
            <MotionInView variants={varFadeInLeft}>
              <Button>
                <Link href="https://play.google.com/store/apps/details?id=eu.onlyonecard.mobile">
                  <Box
                    component="img"
                    src={google_play_logo}
                    alt=""
                    sx={{
                      height: "70px",
                      width: "130px",
                    }}
                  />
                </Link>
              </Button>
            </MotionInView>
          </Box>
        </Grid>
        <Grid item xs={8} md={5.5}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-around"
          >
            {LINKS.map((list) => {
              const { headline, children, id } = list;
              return (
                <Stack key={id} spacing={3}>
                  <Typography
                    fontSize="16px"
                    fontWeight="700"
                    lineHeight="24px"
                    color="#10403B"
                    mb="1.5rem"
                  >
                    {headline}
                  </Typography>
                  {children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      fontSize="16px"
                      component={RouterLink}
                      sx={{ display: "block", lineHeight: "14px" }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} mt="1rem">
          <Typography
            fontSize="18px"
            fontWeight="700"
            lineHeight="27px"
            textAlign={{ md: "end", xs: "center" }}
            mb="3rem"
          >
            Rester informé et recevoir les chroniques de la finance et de
            l’impact
          </Typography>
          <Stack>
            <MotionInView variants={varFadeInUp}>
              <TextField
                fullWidth
                type="email"
                sx={{ bgcolor: "#fff", borderRadius: "7.5px" }}
                label="* votre@email.com"
              />
            </MotionInView>
          </Stack>
          <Stack
            sx={{
              mt: 5,
              mb: { xs: 5, md: 6 },
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "center" },
            }}
          >
            {SOCIALS.map((social) => (
              <Button variant="outline">
                <Link href={social.lien}>
                  <Box
                    key={social.id}
                    component="img"
                    src={social.icon}
                    sx={{ height: "30px" }}
                  />
                </Link>
              </Button>
            ))}
            <MotionInView variants={varFadeInUp} className="my-2">
              <TButton name="M'abonner" link="/" />
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
            const { id, children } = list;
            return (
              <Stack key={id}>
                <Typography sx={{ fontSize: { md: 14, xs: "12.7px" } }}>
                  {children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      component={RouterLink}
                      sx={{ display: "block", mr: "1.5rem" }}
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
            fontSize: { md: 11, xs: 10 },
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
