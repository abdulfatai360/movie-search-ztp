import { createGlobalStyle } from 'styled-components';
import ibmPlexSansRegular2 from '../assets/fonts/ibmplexsans-regular-webfont.woff2';
import ibmPlexSansRegular from '../assets/fonts/ibmplexsans-regular-webfont.woff';
import ibmPlexSansMedium2 from '../assets/fonts/ibmplexsans-medium-webfont.woff2';
import ibmPlexSansMedium from '../assets/fonts/ibmplexsans-medium-webfont.woff';
import ibmPlexSansBold2 from '../assets/fonts/ibmplexsans-bold-webfont.woff2';
import ibmPlexSansBold from '../assets/fonts/ibmplexsans-bold-webfont.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ibm_plex_sansregular';
    src: url(${ibmPlexSansRegular2}) format('woff2'),
      url(${ibmPlexSansRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ibm_plex_sansmedium';
    src: url(${ibmPlexSansMedium2}) format('woff2'),
      url(${ibmPlexSansMedium}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ibm_plex_sansbold';
    src: url(${ibmPlexSansBold2}) format('woff2'),
      url(${ibmPlexSansBold}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;
  }

  *::before, *::after, * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: #647787;
    background-color: #f3f3f3;
    line-height: 1.4;
    letter-spacing: 0.3px;
    font-size: 1.6rem;
    font-family: 'ibm_plex_sansregular', sans-serif;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3 {
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  p {
    margin: 0;
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 1.6;
  }
`;

export default GlobalStyle;
