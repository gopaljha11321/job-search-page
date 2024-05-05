import JobListingPage from "./jobs";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <JobListingPage />
    </ThemeProvider>
  );
}

export default App;
