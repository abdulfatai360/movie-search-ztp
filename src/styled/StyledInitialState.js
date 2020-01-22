import styled from 'styled-components';

const StyledInitialState = styled.main`
  background: #fff;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 40px;
    font-size: 2.5em;
    color: #1875f0;
    font-family: 'ibm_plex_sansbold', sans-serif;
  }

  p {
    margin-top: 40px;
    width: 500px;
    text-align: center;
  }
`;

export default StyledInitialState;
