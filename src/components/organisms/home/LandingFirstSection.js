import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { Box, Typography, Grid } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import ouverture_compte_img from "../../../assets/images/ouverture_compte_img.png";
import master_card from "../../../assets/images/master_card.png";
import {
  TextAnimate,
  varFadeInRight,
  varWrapEnter,
  varFadeInUp,
} from "../../atoms/animate";
import MotionInView from "../../atoms/animate/MotionInView";

import TButton from "../../atoms/tailwindComponent/TButton.js";
import { PATH_PAGE } from "../../../configues/routes/paths";

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: theme.palette.background.green,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    height: 800,
    padding: 0,
  },
}));

export default function LandingFirstSection() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          md={6.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: {
              md: 18,
              xs: 0,
            },
          }}
        >
          <Box>
            <TextAnimate text="Le 1er compte à" variants={varFadeInRight} />
            <br />
            <TextAnimate text="impact positif." variants={varFadeInRight} />
            <br />
            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  fontSize: "20px",
                  mt: {
                    md: 4,
                    xs: 0,
                  },
                }}
              >
                <Typography variant="h5">
                  Un compte courant, une carte Mastercard pour protéger la
                </Typography>
                biodiversité et réduire les inégalités.
              </Typography>
              <br />
              <Box sx={{ display: "inline-flex" }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 5,
                    fontWeight: "fontWeightMedium",
                  }}
                >
                  Et tous les services de gestion de compte au quotidien.
                </Typography>
              </Box>
            </motion.div>
            <MotionInView variants={varFadeInUp}>
              <TButton name="En savoir plus" link={PATH_PAGE.UnGesteUnImpact} />
            </MotionInView>
            <Box
              component="img"
              alt="Eco-compte Onlyone"
              src={master_card}
              sx={{
                width: 75,
                height: 70,
                alignItems: "center",
                objectFit: "cover",
                opacity: "0.5",
                filter: "grayscale(100%)",
              }}
            />
          </Box>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={5.5} sx={{ pl: { md: "10px", xs: "5px" } }}>
            <Box
              component="img"
              src={ouverture_compte_img}
              alt="Eco-compte Onlyone"
              sx={{
                width: "auto",
                height: 500,
                alignItems: "center",
                mt: 15,
                objectFit: "cover",
              }}
            />
          </Grid>
        </MHidden>
      </Grid>
    </RootStyle>
  );
}