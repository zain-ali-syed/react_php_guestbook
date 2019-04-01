import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
  if (!messages.length) return <div>Loading..</div>;
  return (
    <div className="row">
      {messages.map(({ Name, Email, Message, Date }) => (
        <MessageItem name={Name} email={Email} message={Message} date={Date} />
      ))}
    </div>
  );
};

export default MessageList;
