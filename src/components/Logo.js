import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import onlyone_logo from "../assets/images/onlyone_logo.png";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      component="img"
      src={onlyone_logo}
      alt="logo"
      sx={{
        width: { md: 190, xs: 140 },
        height: { md: 50, xs: 40 },
        objectFit: "cover",
        ...sx,
      }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
