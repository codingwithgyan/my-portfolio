import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/Home';
import './App.css'
import AnimatedCursor from 'react-animated-cursor';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import WorkExperience from './pages/WorkExperience/WorkExperience';

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
     <AnimatedCursor color='221, 211, 211'/>
        <Home/>
        <About/>
        <Skills/>
        <WorkExperience/>
    </ThemeProvider>
    </div>
  )
}

export default App
