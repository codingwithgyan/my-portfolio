import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/Home';
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

function App() {

  return (
    <div className='app-main-container'>
     <ThemeProvider theme={theme}>
     <CssBaseline />
        <Home/>
    </ThemeProvider>
    </div>
  )
}

export default App
