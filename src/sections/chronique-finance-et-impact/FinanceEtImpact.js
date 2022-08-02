import { useState } from "react";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  buttonTwoStyles,
  CHRONIQUEDATA,
  BUTTONLABELLEDATA,
} from "./ChroniqueFinanceEtImpact.constant";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#00db89",
    "&:hover": { backgroundColor: "#00db89" },
  },
  link: {
    backgroundColor: "#fff",
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
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",
            mt: {
              md: 24,
              xs: 15,
            },
            mb: 18,
          }}
        >
          La chronique finance et impact
        </Typography>
        <Grid item xs={6}>
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
        <Grid item xs={6} mt="4rem">
          <Container>
            <Grid container spacing={{ xs: 4, md: 4 }}>
              {data.map((item) => (
                <Grid
                  item
                  xs={4}
                  md={4}
                  sx={{ width: 150, minWidth: 394 }}
                  key={item.id}
                >
                  <Card
                    sx={{
                      borderRadius: "0px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={item.icon}
                        alt="green iguana"
                        sx={{ height: 320 }}
                      />
                      <CardContent>
                        <Typography
                          sx={{
                            display: "flex",
                            mb: "20px",
                            fontSize: "0.8em",
                            lineHeight: 1.4,
                            margin: "0px 0px 20px",
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
                            fontSize: "20px",
                            fontWeight: "bold",
                            lineHeight: 1.2,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Typography
                          sx={{
                            color: "#00db9b",
                            fontSize: "17px",
                            fontWeight: 600,
                            marginLeft: "15px",
                          }}
                        >
                          {item.lien}
                        </Typography>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
