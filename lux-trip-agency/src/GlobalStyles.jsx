import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Forum&family=Montserrat:wght@600;700&display=swap');
  body{
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Forum';
    }
  h1,h2,h3,h4,h5,p,ul{
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  h1{
  }
`;
export default GlobalStyles;