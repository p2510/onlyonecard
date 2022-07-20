// routes
import Router from "./routes";
//theme
import ThemeProvider from "./theme";
// hooks

// components
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
