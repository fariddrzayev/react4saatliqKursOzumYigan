import './App.css';
import { makeStyles, ThemeProvider, CssBaseline, createTheme } from '@material-ui/core';
import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'

const style = makeStyles({
  appMain: {
    paddingLeft: '320px',
     width: '100%',
     backgroundColor: '#f4f5fd'
    }
  }
)
const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f824526"
    },
    background: {
      default: '#f4f5fd'
    }
  },
  shape: {
    borderRadius: '12px'
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})


function App() {

  const classes = style();

  return (
    <ThemeProvider theme={theme} >
      <SideMenu/>
      <div className={classes.appMain}>
        <Navbar />
        <Header />
        <Main />
      </div>
    <CssBaseline />

    </ThemeProvider>
  );
}

export default App;