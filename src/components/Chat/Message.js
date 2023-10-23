import React from 'react';
import styled from '@emotion/styled';

const StyledUserMessage = styled.div`
  background-color: #e5e5e5;
  // style is here
`;

const StyledBotMessage = styled.div`
  background-color: #9e9e9e;
  color: white;
  // style is here
`;

const Message = ({ sender, content }) => (
  sender === 'user' ? <StyledUserMessage>{content}</StyledUserMessage> : <StyledBotMessage>{content}</StyledBotMessage>
);

export default Message;
