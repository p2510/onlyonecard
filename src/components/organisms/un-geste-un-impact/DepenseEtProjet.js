import { styled } from "@mui/system";
import { Box, Grid, Typography, Card } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import chaque_depense from "../../../assets/images/chaque_depense.png";
import projet_solidaire from "../../../assets/images/projet_solidaire.png";
import TButton from "../../atoms/tailwindComponent/TButton.js";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import { PATH_PAGE } from "src/configues/routes/paths";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function DepenseEtProjet() {
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
            display: "flex",
            justifyContent: "center",
            fontSize: "3.5rem",
            fontWeight: "bold",
            alignItems: "center",
            mt: {
              md: 21,
            },
          }}
        >
          Un geste, un impact
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
            alignItems: "center",
            fontFamily: "Poppins",
            fontWeight: 400,
            letterSpacing: "0px",
            fontStyle: "normal",
            mb: 6,
          }}
        >
          Transformez chacun de vos gestes en bonne action grâce à votre compte
          courant OnlyOne
        </Typography>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "8rem",
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
                  src={chaque_depense}
                  sx={{
                    borderRadius: 2,
                    width: "100%",
                    height: "37vw",
                  }}
                />
              </Card>
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6} lg={5.5} mt="1rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                display: "flex",
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                margin: 0,
                lineHeight: 1.3,
                fontSize: 36,
              }}
            >
              Protégez la biodiversité à chaque dépense !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 6,
                mt: 2,
                fontSize: "19px",
                lineHeight: "1.3em",
                fontWeight: "fontWeightMedium",
              }}
            >
              Vous protégez la biodiversité à chacun de vos paiements chez vos
              commerçants, sans dépenser un centime en plus. Compte ouvert,
              carte bleue en poche, votre impact commence dès à présent. Nous
              reversons la totalité des frais que nous percevons à EcoTree.
              Forestiers de coeur, ces derniers oeuvrent à entretenir les forêts
              et protéger la biodiversité. Avec eux, nous plantons des haies et
              installons des ruches. Un projet très concret auquel vous
              participez au quotidien. Et, une chose est sûre : vous aidez à
              préserver et à restaurer l’écosystème de la vie terrestre (ODD 15)
            </Typography>
          </MotionInView>
          <Box
            sx={{
              margin: "0.3rem",
              textAlign: "center",
              lineHeight: 1.9,
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <TButton
                name="Je découvre le compte et sa carte de paiement OnlyOne"
                link={PATH_PAGE.CompteEcologiqueEthique}
              />
            </MotionInView>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          width: "80vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 8,
                color: "common.gray",
                fontSize: "2.5rem",
                lineHeight: "1.1em",
                mt: "0.5rem",
                fontWeight: "fontWeightMedium",
              }}
            >
              Participez à des projets solidaires, dès votre souscription
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 6,
                mt: -5,
                fontSize: "21px",
                lineHeight: "1.2em",
                fontWeight: 400,
              }}
            >
              Vous souscrivez à un compte courant écologique et éthique, nous
              reversons 10% à Unitlife, un fonds des Nations Unies. Grâce à ce
              partenaire présent depuis le début de notre histoire, vous
              participez, vous aussi, au mouvement mondial de solidarité
              citoyenne et devenez acteur de la lutte contre la malnutrition
              chronique. Ainsi, vous contribuez, à votre échelle, à réaliser 3
              des 17 objectifs de développement durable : la faim « zéro » (ODD
              2), l’égalité entre les sexes (ODD 5) et les mesures à la lutte
              contre les changements climatiques (ODD 13).
            </Typography>
          </MotionInView>
          <Box sx={{ ml: { md: 3 } }}>
            <MotionInView variants={varFadeInUp}>
              <TButton
                name="Je comprends l'importance de ce projet solidaire"
                link={PATH_PAGE.PartenariatOnuUnitlife}
              />
            </MotionInView>
          </Box>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInUp}>
              <Card
                sx={{
                  width: { md: 520, xs: 260 },
                  ml: "2rem",
                  boxShadow: "8px 6px 6px 2px #8c8888",
                }}
              >
                <Box
                  component="img"
                  alt="Image d'une pièce d'hero "
                  src={projet_solidaire}
                  sx={{
                    borderRadius: 2,
                    width: "100%",
                    height: "36vw",
                  }}
                />
              </Card>
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
    </RootStyle>
  );
}
