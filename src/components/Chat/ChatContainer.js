import React from 'react';
import styled from '@emotion/styled';
import MessageList from './MessageList';
import InputContainer from './InputContainer';

const StyledChatContainer = styled.div`
  // style is here
`;

const ChatContainer = ({ messages, currentMessage, handleSend, setCurrentMessage }) => (
  <StyledChatContainer>
    <MessageList messages={messages} />
    <InputContainer
      currentMessage={currentMessage}
      handleSend={handleSend}
      setCurrentMessage={setCurrentMessage}
    />
  </StyledChatContainer>
);

export default ChatContainer;
