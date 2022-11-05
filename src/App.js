import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#F7C532",
            },
        secondary: {
              main:"#231E41"
            }
      },
      typography: {
        fontFamily: [
          '"Rubik"',
          'sans-serif',
          
        ].join(','),
      },
    });
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <HomePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
