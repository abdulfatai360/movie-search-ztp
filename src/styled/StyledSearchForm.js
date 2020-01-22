import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 450px;
  height: 44px;
  padding: 0 10px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  font-size: 1.05em;
  font-family: 'ibm_plex_sansregular', sans-serif;

  &:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }

  input {
    display: block;
    padding: 0.2rem 0.5rem;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    outline: none;
    border-style: hidden;
    background-color: transparent;

    &::placeholder {
      font-size: 0.9em;
    }
  }
`;

export default StyledSearchForm;
