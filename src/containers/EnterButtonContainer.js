import React from 'react';
import GenericLinkButton from '../components/GenericLinkButton';

const EnterButtonContainer = () => {
  return (
    <GenericLinkButton
      buttonText={'Enter'}
      buttonClass={'enter-button'}
      path={'/habits'}
    />
  );
};

export default EnterButtonContainer;
