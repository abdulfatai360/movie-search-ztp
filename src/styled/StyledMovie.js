import styled from 'styled-components';

const StyledMovie = styled.section`
  padding: 50px 100px;
  flex: 1 1 0;

  .Headline {
    display: flex;

    .Headline__Info {
      margin-left: 30px;

      h1 {
        font-family: 'ibm_plex_sansbold', sans-serif;
      }

      p {
        margin-bottom: 0.5em;
      }

      a:hover {
        color: #252e36;
        cursor: pointer;
      }
    }
  }
`;

export default StyledMovie;
