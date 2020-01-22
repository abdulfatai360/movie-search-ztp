import React from 'react';
import StyledHeader from '../styled/StyledHeader';
import StyledSearchForm from '../styled/StyledSearchForm';

const Header = props => {
  return (
    <StyledHeader>
      <h1>MovieSearch</h1>

      <StyledSearchForm onSubmit={props.onSearch}>
        <input
          type="search"
          placeholder="search movie title"
          value={props.searchQuery}
          onChange={props.onsearchQueryChange}
        />
      </StyledSearchForm>
    </StyledHeader>
  );
};

export default Header;
