import { useState } from "react";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
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
import {
  buttonTwoStyles,
  CHRONIQUEDATA,
  BUTTONLABELLEDATA,
} from "./ChroniqueFinanceEtImpact.constant";
import { PATH_PAGE } from "src/configues/routes/paths";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#2A7267",
    "&:hover": { backgroundColor: "#2A7267" },
  },
  link: {
    backgroundColor: "#fff",
    color: "#10403B",
  },
}));

// ----------------------------------------------------------------------

export default function FinanceEtImpact() {
  const [data, setData] = useState(CHRONIQUEDATA);
  const classes = useStyles();
  const [value, setValue] = useState("Tout");

  const handleFiltreChange = (e) => {
    let type = e.target.value;
    setValue(type);
    if (type === "Tout") {
      setData(CHRONIQUEDATA);
    } else if (type === "Finance") {
      const filtered = CHRONIQUEDATA.filter((item) => item.type === "Finance");
      setData(filtered);
    } else if (type === "Impact Positif") {
      const filtered = CHRONIQUEDATA.filter(
        (item) => item.type === "Impact Positif"
      );
      setData(filtered);
    } else if (type === "Actualités") {
      const filtered = CHRONIQUEDATA.filter(
        (item) => item.type === "Actualités"
      );
      setData(filtered);
    }
  };

  return (
    <RootStyle>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 20,
        }}
      >
        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: 900,
            lineHeight: "63px",
            textAlign: "center",
            color: "#10403B",
            mt: {
              md: 24,
              xs: 15,
            },
            mb: 16,
          }}
        >
          La chronique <span style={{ color: "#C4E3D5" }}>finance</span> et
          <span style={{ color: "#C4E3D5" }}> impact</span>
          <span style={{ color: "#FAAA42" }}>.</span>
        </Typography>
        <Grid item xs={6} mb={{ md: 0, xs: -10 }}>
          <Box sx={{ width: "100%", maxWidth: "100%" }}>
            {BUTTONLABELLEDATA.map((item, key) => (
              <Button
                className={value === item.type ? classes.root : classes.link}
                variant="outlined"
                sx={{ ...buttonTwoStyles }}
                key={item.id}
                value={item.type}
                onClick={handleFiltreChange}
              >
                {item.type}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} mt="10rem">
          <Container>
            <Grid container spacing={{ xs: 4, md: 8 }}>
              {data.map((item) => (
                <Grid
                  item
                  xs={4}
                  md={4}
                  sx={{
                    width: { md: "333px", xs: "100%" },
                    minWidth: { md: "403px", xs: "100%" },
                  }}
                  key={item.id}
                >
                  <Link href={PATH_PAGE.ArticleBlog}>
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
                            <span style={{ marginRight: "10px" }}>
                              {item.type}
                            </span>
                            <Divider orientation="vertical" flexItem />
                            <span style={{ marginLeft: "10px" }}>
                              {item.date}
                            </span>
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
        </Grid>
      </Grid>
    </RootStyle>
  );
}
