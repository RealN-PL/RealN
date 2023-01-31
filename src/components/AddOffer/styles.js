import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
          main: '#0971f1',
          darker: '#053e85',
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
  }});

  export default theme