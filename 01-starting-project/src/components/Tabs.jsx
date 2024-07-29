import React from 'react';
export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonsContainer = buttonsContainer // Const must be in Upper Case

  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      <div id="tab-content">
        {children}
      </div>
    </>
  )
}