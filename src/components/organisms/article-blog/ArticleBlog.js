import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { MHidden } from "src/components/atoms/@material-extend";
import { PATH_PAGE } from "src/configues/routes/paths";
import article_image from "../../../assets/images/article_image.png";
import { CHRONIQUEDATA } from "./ArticleBolg.constant";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
  marginTop: -100,
}));

export default function ArticleBlog({ isActive }) {
  return (
    <RootStyle>
      <Container sx={{ marginLeft: { md: "200px", xs: 0 } }}>
        <Box
          sx={{
            mt: "291px",
          }}
        >
          <Button
            sx={{
              borderRadius: 50,
              bgcolor: "#2A7267 !important",
              "&:hover": { bgcolor: "#10403B !important" },
              boxShadow: "none",
              fontSize: "16px",
              padding: "8px 38px 8px 38px",
            }}
            variant="contained"
            href={PATH_PAGE.ChroniqueFinanceEtImpact}
          >
            Retour au blog
          </Button>
        </Box>
        <Typography
          style={{
            color: "#10403B",
            fontWeight: 800,
            fontSize: "38px",
            lineHeight: "57px",
            margin: "25px 0px 20px 0px",
          }}
        >
          Les rouages d’OnlyOne : lancer un projet à impact
          <br /> positif dans le monde bancaire
        </Typography>
        <Typography
          style={{
            fontFamily: "Lora",
            color: "#10403B",
            fontWeight: 600,
            fontSize: "21px",
            lineHeight: "25.6px",
            margin: "16px 0px 20px 0px",
          }}
        >
          L'équipe OnlyOne
          <br />
          <span
            style={{
              fontFamily: "Lora",
              color: "#10403B",
              fontWeight: 400,
              fontSize: "19px",
              lineHeight: "27px",
            }}
          >
            10 janvier 2022
          </span>
        </Typography>
      </Container>
      <MHidden width="mdDown">
        <Box component="img" src={article_image} alt="Les rouages d’OnlyOne" />
      </MHidden>
      <Container sx={{ marginLeft: { md: "200px", xs: 0 }, marginTop: "79px" }}>
        <Typography
          style={{
            fontFamily: "Lora",
            color: "#10403B",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "27px",
            margin: "0px 0px 0px px",
          }}
        >
          Innover dans le monde bancaire requiert beaucoup de développement et
          de travail afin de répondre aux exigences du
          <br /> régulateur bancaire.
          <br />
          <br /> En 2019, OnlyOne a obtenu l’autorisation de l’Autorité de
          Contrôle Prudentiel et de Résolution (ACPR, le régulateur bancaire
          <br />
          français) afin de proposer des comptes et des services de paiement en
          France.
          <br />
          <br /> Nous avons d’ores et déjà pu innover dans les services
          écologiques à l’instar de l’éco-coach qui calcule l’empreinte carbone
          <br />
          de vos dépenses et aide à les réduire ainsi qu’avec notre carte
          éco-responsable qui finance des projets à impact positif à<br />
          chaque paiement.
          <br />
          <br /> En revanche, nous ne pouvons pas encore investir les dépôts sur
          compte courant de nos clients ni proposer d’offres de
          <br /> crédit ou de chéquier à l’instar d’une banque traditionnelle.
          <br />
          <br />
          Plus nous nous développerons, plus nous remplirons les obligations
          imposées par les lois françaises et européennes pour
          <br /> demander à devenir un établissement de crédit aussi appelé «
          banque » à part entière et ainsi pouvoir vous proposer ces
          <br /> services.
        </Typography>
        <Typography
          style={{
            color: "#10403B",
            fontWeight: 800,
            fontSize: "38px",
            lineHeight: "57px",
            marginTop: "38px",
            marginBottom: "34px",
          }}
        >
          Lancer un projet innovant dans le monde bancaire ?
        </Typography>
        <Typography
          style={{
            fontFamily: "Lora",
            color: "#10403B",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "27px",
            margin: "0px 0px 93px px",
          }}
        >
          L’agrément le plus connu dans le monde de la banque de détail est
          celui d’établissement de crédit (détenu par les banques
          <br />
          traditionnelles) permettant à une entreprise de gérer les dépôts de
          ses clients et d’effectuer des opérations de crédit.
          <br />
          <br /> Adossée à la Banque de France, l’Autorité de contrôle
          prudentiel et de résolution (ACPR) est responsable de l’agrément et de
          la
          <br /> surveillance des établissements bancaires, d’assurance et de
          leurs intermédiaires, dans l’intérêt de leurs clientèles et de la
          <br />
          préservation de la stabilité du système financier.
        </Typography>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider
          color="#10403B"
          sx={{
            width: "60%",
            height: "2px",
            mb: { md: "73px", xs: 0 },
            mt: { md: 7, xs: 0 },
          }}
        />
      </Box>
      <Typography
        style={{
          textAlign: "center",
          color: "#10403B",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "36px",
          marginBottom: "73px",
        }}
      >
        D'autres articles ?
      </Typography>
      <Container sx={{ marginBottom: "183px" }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {CHRONIQUEDATA.map((item) => (
            <Grid
              item
              xs={4}
              md={4}
              sx={{ width: "333px", minWidth: { md: "403px", xs: "100%" } }}
              key={item.id}
            >
              <Link href="#">
                <Card
                  sx={{
                    borderRadius: "0px",
                    background: "#E4D6C0",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={item.icon}
                      alt="green iguana"
                      sx={{ height: "233px" }}
                    />
                    <CardContent sx={{ height: "283px" }}>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: "20px",
                          fontSize: "17px",
                          lineHeight: 1.4,
                          color: "#10403B",
                        }}
                      >
                        <span style={{ marginRight: "10px" }}>{item.type}</span>
                        <Divider orientation="vertical" flexItem />
                        <span style={{ marginLeft: "10px" }}>{item.date}</span>
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "24px",
                          fontWeight: 700,
                          lineHeight: "36px",
                          color: "#10403B",
                          mb: 2,
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#B7795E",
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontWeight: 700,
                        }}
                      >
                        {item.lien}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
