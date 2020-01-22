import styled from 'styled-components';
import { rotate } from '../utils/styleUtils';

const StyledSpinner = styled.section`
  padding: 40px 30px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1em;
    font-family: 'ibm_plex_sansmedium', sans-serif;
    text-transform: uppercase;
  }

  div {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border: 5px solid rgba(189, 189, 189, 0.25);
    border-left-color: #1875f0;
    border-top-color: #1875f0;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
  }
`;

export default StyledSpinner;
