import React from 'react';
import styled from '@emotion/styled';
import Message from './Message';

const StyledMessageList = styled.div`
  // style is here
`;

const MessageList = ({ messages }) => (
  <StyledMessageList>
    {messages.map((msg, index) => (
      <Message key={index} sender={msg.sender} content={msg.content} />
    ))}
  </StyledMessageList>
);

export default MessageList;
