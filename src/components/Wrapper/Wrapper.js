import React from 'react';

import { StyledWrapper } from './WrapperCSS';

const Wrapper = props => {
  return (
    <StyledWrapper id={props.id}>
      <h4>{props.title}</h4>
      <hr/>
      {props.children}
    </StyledWrapper>
  );
};

export default Wrapper;
