import styled from 'styled-components';

const StyledEpisodeCard = styled.li`
  width: 250px;
  margin: 15px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;

  &:hover {
    border-color: rgba(0, 0, 0, 0.09);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }

  .Episode__Info {
    padding: 20px;
    padding-top: 5px;

    h3 {
      font-size: 1.1em;
      font-family: 'ibm_plex_sansmedium', sans-serif;
    }

    p {
      margin-bottom: 0.5em;
      font-size: 0.95em;
    }
  }
`;

export default StyledEpisodeCard;
