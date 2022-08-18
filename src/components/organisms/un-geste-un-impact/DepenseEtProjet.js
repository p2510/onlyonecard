import { styled } from "@mui/system";
import { Box, Grid, Typography, Button } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import geste_foret_image from "../../../assets/images/geste_foret_image.svg";
import solidaire_image from "../../../assets/images/solidaire_image.svg";
import conseils_phone from "../../../assets/images/conseils_phone.svg";
import homme_image from "../../../assets/images/homme_image.svg";
import cercle_vert from "../../../assets/images/cercle_vert.svg";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";

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
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: 900,
          lineHeight: "63px",
          color: "#10403B",
          mt: {
            md: 21,
          },
        }}
      >
        Un geste, <span style={{ color: "#C4E3D5" }}>un impact</span>
        <span style={{ color: "#FAAA42" }}>.</span>
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: 600,
          fontFamily: "Lora",
          lineHeight: "26px",
          color: "#10403B",
          mt: {
            md: 5,
          },
        }}
      >
        Transformez chacun de vos gestes en bonne action grâce à votre compte
        courant OnlyOne
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: {
            md: "8rem",
            xs: 0,
          },
        }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={geste_foret_image}
              />
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: "57px",
                fontSize: "38px",
                color: "#10403B",
              }}
            >
              Protégez la biodiversité <br /> à chaque dépense !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "27px",
                fontWeight: 400,
                fontFamily: "Lora",
                mb: 6,
                mt: 3,
              }}
            >
              Vous protégez la biodiversité à chacun de vos paiements chez vos
              <br />
              commerçants, sans dépenser un centime en plus. Compte ouvert,
              carte
              <br /> bleue en poche, votre impact commence dès à présent. Nous
              reversons la
              <br /> totalité des frais que nous percevons à EcoTree. Forestiers
              de coeur, ces
              <br /> derniers oeuvrent à entretenir les forêts et protéger la
              biodiversité. Avec
              <br /> eux, nous plantons des haies et installons des ruches. Un
              projet très
              <br /> concret auquel vous participez au quotidien. Et, une chose
              est sûre : vous
              <br /> aidez à préserver et à restaurer l’écosystème de la vie
              terrestre (ODD 15).
            </Typography>
          </MotionInView>
          <Box
            sx={{
              textAlign: "center",
              lineHeight: 1.9,
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Button
                sx={{
                  variant: "contained",
                  borderRadius: 50,
                  background: "#2A7267 !important",
                  "&:hover": { background: "#10403B !important" },
                  color: "#fff",
                  fontSize: "16px",
                  padding: "7px 22px 10px 22px",
                  ml: -15,
                }}
              >
                Je découvre le compte et sa carte de paiement OnlyOne
              </Button>
            </MotionInView>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "100%",
            height: "866px",
            bgcolor: "#10403B",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              height: "133px",
              top: "347px",
              fontSize: { md: "38px", xs: "22px" },
              color: "#fff",
              fontWeight: 800,
              lineHeight: "57px",
              margin: "100px 0px 0px 100px",
            }}
          >
            Participez à des
            <span style={{ color: "#C4E3D5" }}>
              projets
              <br /> solidaires
            </span>
            , dès votre
            <br /> souscription
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Lora",
              margin: "80px 0px 100px 100px",
              fontSize: "21px",
              lineHeight: "27px",
            }}
          >
            Vous souscrivez à un compte courant écologique et éthique, nous
            reversons
            <br /> 10% à Unitlife, un fonds des Nations Unies. Grâce à ce
            partenaire présent
            <br /> depuis le début de notre histoire, vous participez, vous
            aussi, au mouvement
            <br /> mondial de solidarité citoyenne et devenez acteur de la lutte
            contre la
            <br /> malnutrition chronique. Ainsi, vous contribuez, à votre
            échelle, à réaliser 3 des
            <br /> 17 objectifs de développement durable :<br />
            <span style={{ marginLeft: 20 }}>. la faim « zéro » (ODD 2)</span>
            <br />
            <span style={{ marginLeft: 20 }}>
              . l’égalité entre les sexes (ODD 5)
            </span>
            <br />
            <span style={{ marginLeft: 20 }}>
              . les mesures à la lutte contre les changements climatiques (ODD
              13).
            </span>
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              // lineHeight: 1.9,
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Button
                sx={{
                  variant: "contained",
                  borderRadius: 50,
                  background: "#FAAA42 !important",
                  "&:hover": { background: "#f7ba6c !important" },
                  color: "#fff",
                  fontSize: "16px",
                  padding: "7px 22px 7px 22px",
                  margin: "10px, 50px 10px 50px",
                  ml: 6,
                }}
              >
                Je comprends l’importance de ce projet solidaire
              </Button>
            </MotionInView>
          </Box>
        </Box>
        <Box component="img" src={solidaire_image} />
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          bgcolor: "#C4E3D5",
          width: { md: "100%", xs: "100%" },
          height: "729px",
        }}
      >
        <Box mt="-3rem">
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "38px",
              lineHeight: "57px",
              color: "#10403B",
              width: "764px",
              ml: "100px",
              mb: 5,
            }}
          >
            Bénéficiez de conseils avisés et personnalisés pour
            <span style={{ color: "#fff" }}> agir avec impact</span>
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lora",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "27px",
              color: "#10403B",
              width: "707px",
              ml: "100px",
            }}
          >
            Afin de piloter vos bonnes intentions, votre éco-coach (présent au
            quotidien dans
            <br /> l’app) mesure votre empreinte carbone, analyse avec
            bienveillance et vous aide à comprendre comment agir de manière
            efficace, en fonction de votre mode de vie
            <br /> actuel.
            <br /> Cerise sur le gâteau : présent à vos côtés et si vous le
            souhaitez, il vous notifie des suggestions personnalisées, rien que
            pour vous ! Au final, vous gérez facilement
            <br /> votre budget comme votre empreinte carbone, sans compromis
            avec vos valeurs.
            <br /> L’éco-coach d’OnlyOne est un outil très concret pour tous
            ceux qui veulent
            <br /> comprendre comment faire la différence. Car, si nous sommes
            nombreux à savoir
            <br /> qu’il faille changer les choses, nous ne connaissons pas
            toujours l’impact de chacune
            <br /> de nos actions ni ne savons par où commencer.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#2A7267 !important",
              "&:hover": { bgcolor: "#10403B !important" },
              borderRadius: "30px",
              fontSize: "16px",
              boxShadow: "none",
              padding: "8px 30px 9px 30px",
              margin: "60px 0px 0px 240px",
            }}
          >
            Je fais connaissance avec l'éco-coach
          </Button>
        </Box>
        <Box
          component="img"
          src={conseils_phone}
          sx={{
            zIndex: 6,
            margin: "-340px -300px 0px 0px",
          }}
        />
        <Box
          component="img"
          src={cercle_vert}
          sx={{ display: "flex", margin: "-140px 270px 0px 0px" }}
        />
        <Box
          component="img"
          src={homme_image}
          sx={{
            display: "flex",
            zIndex: 6,
            margin: "30px 50px 0px -600px",
          }}
        />
      </Box>
    </RootStyle>
  );
}
