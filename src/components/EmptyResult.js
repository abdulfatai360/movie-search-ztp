import React from 'react';
import StyledEmptyResult from '../styled/StyledEmptyResult';

const EmptyResult = () => {
  return (
    <StyledEmptyResult>
      <h2>No match was found</h2>

      <p>Refine your serach query or try again.</p>
    </StyledEmptyResult>
  );
};

export default EmptyResult;
