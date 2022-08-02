import { styled } from "@mui/system";
import { Box, Grid, Typography, Card } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import carte_paiement from "../../../assets/images/carte_paiement.png";
import frais_bancaire from "../../../assets/images/frais_bancaire.png";
import Lock from "../../../assets/images/Lock.png";
import TButton from "../../atoms/tailwindComponent/TButton.js";

import {
  varFadeInUp,
  MotionInView,
  varFadeInLeft,
  varFadeInDown,
} from "../../atoms/animate";
import { BANQUEDATA } from "../home/Home.constant";
import Banques from "../../molecules/Banques";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function CartePaiementEtPrix() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "-8rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={5.8}>
            <MotionInView variants={varFadeInUp}>
              <Card
                sx={{
                  width: { md: 520, xs: 260 },
                  boxShadow: "8px 6px 6px 2px #8c8888",
                }}
              >
                <Box
                  component="img"
                  alt="Image d'une pièce d'hero "
                  src={carte_paiement}
                  sx={{
                    borderRadius: 2,
                    width: "100%",
                    height: "34vw",
                  }}
                />
              </Card>
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6} lg={5} mt="2rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                margin: 0,
                lineHeight: 1.3,
                fontSize: 35,
              }}
            >
              Recevez la 1ère carte de paiement éco-responsable !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 5,
                mt: 2,
                fontSize: "19px",
                lineHeight: "1.2em",
                fontWeight: 400,
              }}
            >
              Première carte de paiement à 85% en PVC recyclé lancée en France
              avec IDEMIA et Mastercard. Simple et efficace !
              <br /> <br />
              Il faut savoir qu’une tonne de plastique recyclé permet
              d’économiser 7,4 mètres cubes d’espace dans les décharges.
              <br />
              <br />
              Chaque geste compte.
              <br />
              <br />
              Vous payez chez un commerçant, vous protégez la biodiversité. Tous
              les frais que nous percevons sont reversés à EcoTree afin de
              planter des haies et installer des ruches en France.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,

          mt: {
            md: "9rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={7} lg={7}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 8,
                color: "common.gray",
                fontSize: "2.4rem",
                lineHeight: "1.2em",
                fontWeight: "fontWeightMedium",
              }}
            >
              Le prix de la transparence
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                mb: 5,
                mt: -7,
                fontSize: "18.5px",
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              6€ par mois, c’est le prix de votre abonnement “Impact”, c’est
              <br />
              encore loin des 215 euros annuel ! <br /> Il comprend votre compte
              courant (IBAN Français) et sa <br /> gestion, 2 sous-coffres dans
              lesquels vous pouvez placer vos <br /> arrondis, votre carte
              physique et virtuelle au choix, les <br /> notifications en temps
              réels et les virements zone euro <br /> gratuits. Vous avez aussi
              la possibilité d’agréger tous vos <br /> comptes sans supplément
              de coûts. Vous accédez enfin à de <br /> nombreux services dont un
              éco-coach qui vous accompagne <br /> dans votre transition
              écologique et l’accès à des offres <br /> d’épargne spécifiques.
              Et oui, tout ça !
            </Typography>
          </MotionInView>
          <Box sx={{ ml: { md: 10 } }}>
            <MotionInView variants={varFadeInUp}>
              <TButton name="je trouve l'abonnement qui me convient" link="/" />
            </MotionInView>
          </Box>
        </Grid>
        <MHidden width="mdDown">
          <Grid
            item
            md={5}
            lg={4.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "5rem",
              ml: "2rem",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={frais_bancaire}
                sx={{
                  borderRadius: 2,
                  width: "18vw",
                  height: "12vw",
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
                  lineHeight: 1.4,
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                215 Euros, le coût moyen des frais <br /> bancaires
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: 1.4,
                  textAlign: "center",
                }}
              >
                Vous n’auriez sûrement pas pensé que <br /> c’était aussi élevé.
                D’autant plus que les <br /> coûts manquent souvent de <br />
                transparence !
              </Typography>
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
      <Card
        sx={{
          width: 750,
          ml: 43,
          boxShadow: "2px 6px 8px 4px #8c8888",
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
              width: "68px",
              height: "64px",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2.2rem",
              fontWeight: "bold",
              alignItems: "center",
              padding: 1,
              mb: 4,
              mt: {
                md: -1,
              },
            }}
          >
            Votre argent est en{" "}
            <span style={{ color: "#00db89" }}> sécurité</span> !
          </Typography>
        </Grid>
      </Card>
      <Banques
        data={BANQUEDATA}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            md: 4,
            xs: 8,
          },
          mt: 7,
        }}
      />
    </RootStyle>
  );
}
