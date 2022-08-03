import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography } from "@mui/material";
import { COUTDATA } from "./nosTarifsEtAbonnements.constant";

export default function FonctionnalitesPrincipales() {
  return (
    <Box sx={{ width: "100%", mb: "10rem" }}>
      <Container>
        <Grid
          rowSpacing={1}
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
        >
          <Grid item xs={6}>
            {" "}
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              spacing={{
                md: 16,
                xs: 1,
              }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    height: {
                      md: "90px",
                      xs: "45px",
                    },
                    width: {
                      md: "210px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "20px",
                      xs: "11px",
                    },
                    bgcolor: "#00db89",
                  }}
                >
                  Compte One Jeune (18-25 ans)
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    height: {
                      md: "90px",
                      xs: "45px",
                    },
                    width: {
                      md: "210px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "20px",
                      xs: "11px",
                    },
                    bgcolor: "#00db89",
                  }}
                >
                  Compte One Jeune (18-25 ans)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {COUTDATA.map((item) => (
          <Grid
            key={item.id}
            container
            spacing={22}
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
            <Grid item xs={6} fontSize={{ md: "18px", xs: "12px" }}>
              {item.libelle}
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
                      fontWeight: "bold",
                      ml: {
                        md: 5,
                        xs: -11,
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
                      fontWeight: "bold",
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
