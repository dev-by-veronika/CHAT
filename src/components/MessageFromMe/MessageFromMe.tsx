import React from 'react';
import { Message } from '../../react-app-env.d';

type Props = {
  message: Message,
};

export const MessageFromMe: React.FC<Props> = ({ message }) => {
  return (
    <div className="message-from-me">
      <div className="message-from-me__info">
        <p className="message-from-me__text">{message.body}</p>
        <p className="message-from-me__date">{`${message.date}, ${message.time}`}</p>
      </div>
    </div>
  );
};
