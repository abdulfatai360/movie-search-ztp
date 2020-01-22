import React from 'react';
import StyledInitialState from '../styled/StyledInitialState';
import StyledSearchForm from '../styled/StyledSearchForm';

const InitialState = props => {
  return (
    <StyledInitialState>
      <h1>MovieSearch</h1>

      <StyledSearchForm onSubmit={props.onSearch}>
        <input
          type="search"
          placeholder="Search your movie"
          value={props.searchQuery}
          onChange={props.onsearchQueryChange}
        />
      </StyledSearchForm>

      <p>
        MovieSearch: We provide rich data about your favorite movie. Enter your
        search query and leave the rest to us.
      </p>
    </StyledInitialState>
  );
};

export default InitialState;
