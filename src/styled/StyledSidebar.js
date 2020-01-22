import styled from 'styled-components';

const StyledSidebar = styled.aside`
  width: 400px;
  padding: 50px 30px;
  background-color: #fff;

  h2 {
    font-size: 1em;
    font-family: 'ibm_plex_sansmedium', sans-serif;
    text-transform: uppercase;
  }

  .Season__Item {
    padding: 2px 0;
    font-size: 0.9em;
    text-transform: uppercase;

    &:hover {
      color: #252e36;
      cursor: pointer;
    }

    &:hover .Episode__List {
      color: #647787;
      cursor: initial;
    }
  }

  .Episode__List {
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 10px;
  }
`;

export default StyledSidebar;
