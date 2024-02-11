import React from 'react';
import { Message } from '../../react-app-env.d';

type Props = {
  message: Message,
  photo: string | undefined,
};

export const MessageToMe: React.FC<Props> = ({ message, photo }) => {
  return (
    <div className="message-to-me">
      <div className="message-to-me__info">
        <img
          src={photo}
          alt="avatar"
          className="message-to-me__avatar"
        />
        <p className="message-to-me__text">{message.body}</p>
      </div>
      <p className="message-to-me__date">{`${message.date}, ${message.time}`}</p>
    </div>
  );
};
