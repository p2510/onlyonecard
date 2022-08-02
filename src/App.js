import ScrollToTop from "./components/atoms/ScrollToTop";
import Router from "./configues/routes";
import ThemeProvider from "./configues/theme";
import Router from "./routes";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
