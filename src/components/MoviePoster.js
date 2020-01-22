import styled from 'styled-components';

const StyledMoviePoster = styled.img`
  border-top-left-radius: ${props =>
    props.location === 'episode card' ? '5px' : 'none'};
  border-top-right-radius: ${props =>
    props.location === 'episode card' ? '5px' : 'none'};
  width: ${props => (props.location === 'episode card' ? '250px' : 'auto')};
  height: ${props => (props.location === 'episode card' ? '140px' : 'auto')};
`;

export default StyledMoviePoster;
