import { useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import { AppBar, Toolbar, Container, Stack } from "@mui/material";
import useOffSetTop from "../../hooks/useOffSetTop";
import { PATH_PAGE } from "../../routes/paths";
import { MHidden } from "../../components/@material-extend";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import menuConfig from "./menuConfig";
import Logo from "../../components/Logo";
import TButton from "./../../components/tailwindComponent/TButton.js";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 90;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

export default function MainHeader() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: "background.default",
            height: { md: APP_BAR_DESKTOP - 16 },
          }),
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Logo
            sx={{
              width: { md: 190, xs: 180 },
              height: { md: 50, xs: 40 },
              objectFit: "cover",
            }}
          />

          <MHidden width="mdDown">
            <MenuDesktop isHome={isHome} navConfig={menuConfig} />
          </MHidden>
          <MHidden width="mdDown">
            <Stack direction="row" spacing={2}>
              <TButton
                link={PATH_PAGE.OuvertureDeCompte}
                name="ouvrir un compte"
              />
            </Stack>
          </MHidden>

          <MHidden width="mdUp">
            <MenuMobile navConfig={menuConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
