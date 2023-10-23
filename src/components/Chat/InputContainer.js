import React from 'react';
import styled from '@emotion/styled';

const StyledInputContainer = styled.div`
 // style is here
`;

const TextInput = styled.input`
 // style is here
`;

const InputContainer = ({ currentMessage, handleSend, setCurrentMessage }) => (
  <StyledInputContainer>
    <TextInput
      value={currentMessage}
      onChange={(e) => setCurrentMessage(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      placeholder="input message"
    />
    <button onClick={handleSend}>送信</button>
  </StyledInputContainer>
);

export default InputContainer;
