import ScrollToTop from "./components/atoms/ScrollToTop";
import Router from "./configues/routes";
import ThemeProvider from "./configues/theme";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
