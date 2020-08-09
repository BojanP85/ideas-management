import React from 'react';

import { StyledButton } from './FormButtonsCSS';

const FormButtons = props => {
  const renderSubmitOrUpdateBtn = id => {
    return id === '' ? "Submit" : "Update";
  };

  const renderResetOrCancelBtn = id => {
    return id === '' ? "Reset" : "Cancel";
  };

  return (
    <>
      <StyledButton type="submit">{renderSubmitOrUpdateBtn(props.id)}</StyledButton>
      <StyledButton type="reset" onClick={() => props.resetFields()}>{renderResetOrCancelBtn(props.id)}</StyledButton>
    </>
  );
};

export default FormButtons;
