import * as React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import sms_image from "../../assets/images/sms_image.svg";

Dialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default function Dialogue({ open, modalClose }) {
  return (
    <Dialog
      maxWidth="lg"
      onClose={modalClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ mt: "-10rem" }}
    >
      <DialogContent dividers>
        <Box
          sx={{
            "& .MuiTextField-root": { width: "200%" },
            ml: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{ display: "flex", justifyContent: "end", mt: "-10px" }}
          >
            <Button onClick={modalClose}>
              <CloseIcon sx={{ fontSize: 40, color: "#10403B" }} />
            </Button>
          </Typography>
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: "36px",
                fontSize: "24px",
                mb: "35px",
                mt: "-40px",
              }}
            >
              Nous vous enverrons un SMS contenant un lien pour
              <br /> télécharger l’application OnlyOne.
            </Typography>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <Box>
                <Typography
                  mb="0.5rem"
                  variant="subtitle2"
                  gutterBottom
                  component="legend"
                  sx={{
                    textAlign: "left",
                    lineHeight: 4,
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Téléphone(Nécessaire)
                </Typography>
                <TextField
                  placeholder="+33 612345678"
                  id="fullWidth"
                  sx={{ maxWidth: "386px" }}
                />
                <Button
                  sx={{
                    borderRadius: 50,
                    bgcolor: "#2A7267 !important",
                    "&:hover": { bgcolor: "#10403B !important" },
                    boxShadow: "none",
                    margin: "70px 0px 0px 0px",
                    fontSize: "16px",
                    padding: "7px 45px 10px 45px",
                  }}
                  variant="contained"
                  // href={PATH_PAGE.UnGesteUnImpact}
                >
                  Envoyer
                </Button>
              </Box>
              <Box
                component="img"
                src={sms_image}
                alt="Nous vous enverrons un sms"
                sx={{ ml: 10, mb: -3 }}
              />
            </Grid>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
