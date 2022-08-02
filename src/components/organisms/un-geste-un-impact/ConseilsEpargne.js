import { styled } from "@mui/system";
import { Box, Grid, Typography, Card } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import conseil_avise from "../../../assets/images/conseil_avise.png";
import epargne_positive from "../../../assets/images/epargne_positive.png";
import change_chose from "../../../assets/images/change_chose.png";
import TButton from "../../atoms/tailwindComponent/TButton.js";
import { ECOLOGIQUEDATA } from "./UnGesteUnImpact.constant";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import CommunautesInput from "../../molecules/CommunautesInput";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const titre = (
  <Typography
    sx={{
      fontSize: "32px",
      fontWeight: "bold",
      mb: 6,
      mt: 1,
    }}
  >
    <span>Rejoignez le mouvement des citoyens d’un nouveau monde</span> bancaire
    <span>grâce à un compte écologique et une épargne positive.</span>
  </Typography>
);

export default function ConseilsEpargne() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "1rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={5.8}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={conseil_avise}
                sx={{
                  borderRadius: 2,
                  width: "65%",
                  height: "30vw",
                  ml: 7,
                  mt: 15,
                }}
              />
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
                lineHeight: 1.2,
                fontSize: 37,
              }}
            >
              Bénéficiez de conseils avisés et personnalisés pour agir avec
              impact
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.75,
                mb: 4,
                mt: 2,
                fontSize: "20px",
                lineHeight: "1.3em",
                fontWeight: 400,
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontStyle: "normal",
                boxSizing: "border-box",
              }}
            >
              Afin de piloter vos bonnes intentions, votre éco-coach (présent au
              quotidien dans l’app) mesure votre <br /> empreinte carbone,
              analyse avec bienveillance et vous aide à comprendre comment agir
              de manière efficace, <br /> en fonction de votre mode de vie
              actuel. Cerise sur le gâteau : présent à vos côtés et si vous le
              souhaitez, il vous notifie des suggestions personnalisées, rien
              que pour vous ! Au final, vous gérez facilement votre budget comme
              votre empreinte carbone, sans compromis avec vos valeurs.
              L’éco-coach d’OnlyOne est un outil très concret pour tous ceux qui
              veulent comprendre <br /> comment faire la différence. Car, si
              nous sommes nombreux à savoir qu’il faille changer les choses,
              nous ne connaissons pas toujours l’impact de chacune de nos
              actions ni ne savons par où commencer.
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
              <TButton name="Je fais connaissance avec l'éco-coach" link="/" />
            </MotionInView>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 21,
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
                fontWeight: "fontWeightMedium",
              }}
            >
              Sélectionnez l’épargne positive qui répond à vos besoins
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 5,
                mt: -6,
                fontSize: "21px",
                lineHeight: "1.2em",
                fontWeight: 400,
              }}
            >
              Dans l’app, vous accédez à la Place Impact : un espace <br /> de
              découvertes qui regroupe les offres de nos <br /> partenaires pour
              épargner et investir votre argent. Une sélection de services
              innovants, écologiques et solidaires, soigneusement concoctée par
              votre éco-coach. Nous mettons notre expertise à votre service afin
              de vous faire gagner du temps, de l’argent et de l’impact positif
              !
            </Typography>
          </MotionInView>
          <Box sx={{ ml: { md: 14.5 } }}>
            <MotionInView variants={varFadeInUp}>
              <TButton name="J'explore la Place Impact" link="/" />
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
                  src={epargne_positive}
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
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={change_chose}
                sx={{
                  borderRadius: 2,
                  width: "98%",
                  height: "40vw",
                  mt: -11,
                }}
              />
              <Grid
                container
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  display: "flex",
                  width: "55vw",
                  mb: {
                    md: 7,
                    xs: 8,
                  },
                }}
              >
                {ECOLOGIQUEDATA.map((item) => (
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
                          width: "130px",
                          height: "100px",
                        }}
                      />
                    </MotionInView>
                  </Grid>
                ))}
              </Grid>
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6} lg={5.5} ml="2rem" mb="11rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                display: "flex",
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                margin: 0,
                lineHeight: 1.3,
                fontSize: 34,
              }}
            >
              Un compte écologique qui change les choses !
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
              Pour toucher son salaire ou payer ses factures, 99% des français
              possèdent au moins un compte courant. Besoin du quotidien, le
              compte nous accompagne dans notre vie de tous les jours alors
              autant qu’il soit en adéquation avec les valeurs que nous portons.
              En 8 min, vous ouvrez un compte courant éthique et écologique,
              vous gérez votre argent comme votre empreinte carbone et vous
              transformez, à votre rythme, chacun de vos gestes en bonne action.
              <br /> <br />
              L’exigence bancaire, une utilisation facile et intuitive, les
              valeurs en plus. Et si vous testiez ?
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
              <TButton name="J'ouvre mon éco-compte" link="/" />
            </MotionInView>
          </Box>
        </Grid>
        <CommunautesInput
          sx={{ fontSize: "32px", textAlign: "center" }}
          title={titre}
          inputStyle={{ ml: "-1rem", mt: -8, mb: -18 }}
          buttonStyle={{ mr: "28.5rem" }}
        />
      </Grid>
    </RootStyle>
  );
}
