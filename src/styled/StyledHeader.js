import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 0 30px;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.2);

  h1 {
    margin-right: 400px;
    font-size: 1.5em;
    color: #1875f0;
    font-family: 'ibm_plex_sansbold', sans-serif;
  }
`;

export default StyledHeader;
