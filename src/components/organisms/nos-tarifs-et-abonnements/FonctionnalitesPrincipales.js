import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography, Divider } from "@mui/material";
import { COUTDATA } from "./nosTarifsEtAbonnements.constant";

export default function FonctionnalitesPrincipales() {
  return (
    <Box sx={{ width: "100%", mb: "10rem" }}>
      <Container>
        <Grid
          rowSpacing={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: { md: -5, xs: 3 },
            mb: 3,
          }}
        >
          <Grid item xs={6}>
            {" "}
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              spacing={{
                md: 5,
                xs: 10,
              }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "25.5px",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    height: {
                      md: "90px",
                      xs: "45px",
                    },
                    width: {
                      md: "292px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "24px",
                      xs: "11px",
                    },
                    bgcolor: "#10403B",
                  }}
                >
                  Compte One Jeune <br /> (18-25 ans)
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "25.5px",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    height: {
                      md: "90px",
                      xs: "45px",
                    },
                    width: {
                      md: "292px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "24px",
                      xs: "11px",
                    },
                    bgcolor: "#10403B",
                  }}
                >
                  Compte One Jeune <br /> (18-25 ans)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          color="#10403B"
          sx={{
            height: "2px",
            mb: { md: 7, xs: 0 },
            mt: { md: 7, xs: 0 },
          }}
        />
        {COUTDATA.map((item) => (
          <Grid
            key={item.id}
            container
            spacing={22}
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: "Lora",
                  fontSize: { md: "21px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {item.libelle}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      textAlign: "center",
                      fontSize: "24px",
                      fontWeight: 700,
                      ml: {
                        md: 5,
                        xs: -13,
                      },
                    }}
                  >
                    {item.valeurParAn}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={6}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      fontSize: "24px",
                      fontWeight: 700,
                      ml: {
                        md: 6,
                        xs: -6,
                      },
                    }}
                  >
                    {item.valeurParMois}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}
