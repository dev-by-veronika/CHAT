import React, { useEffect, useRef, useState } from 'react';
import './Messages.scss';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getChatsSelector, getMessagesSelector, getSelectedChatIdSelector } from '../../store/selectors';
import { MessageFromMe } from '../MessageFromMe/MessageFromMe';
import { MessageToMe } from '../MessageToMe/MessageToMe';
import { getMessageFromChuck } from '../../api/message';
import { loadMessagesAction } from '../../store/actions';

export const Messages: React.FC = () => {
  const dispatch = useDispatch();
  const chatId = useSelector(getSelectedChatIdSelector);
  const chats = useSelector(getChatsSelector);
  const messages = useSelector(getMessagesSelector);
  const [currentInput, setCurrentInput] = useState('');
  const refScroll = useRef<HTMLDivElement | null>(null);
  const selectedChat = chats.find((chat) => {
    return chat.id === chatId;
  });
  const filteredMessages = messages.filter((message) => {
    return message.chatId === chatId;
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const addMessageHandler = async () => {
    const newMessage = {
      body: currentInput,
      date: format(new Date(), 'M/d/yy'),
      time: format(new Date(), 'h:mm aa'),
      fullDate: +new Date(),
      direction: 'from_me',
      chatId,
    };

    // await addMessage(newMessage);
    setCurrentInput('');
    // const responseMessages = await getMessages();

    dispatch(loadMessagesAction([newMessage]));

    // eslint-disable-next-line no-console
    console.log(messages);

    setTimeout(async () => {
      const response = await getMessageFromChuck();

      const chuckMessage = {
        body: response.value,
        date: format(new Date(), 'M/d/yy'),
        time: format(new Date(), 'h:mm aa'),
        fullDate: +new Date(),
        direction: 'to_me',
        chatId,
      };

      // await addMessage(chuckMessage);
      // const responseFromChuck = await getMessages();

      dispatch(loadMessagesAction([chuckMessage]));
    }, 10000);
  };

  useEffect(() => {
    if (refScroll) {
      refScroll.current?.scrollTo(0, refScroll.current?.scrollHeight);
    }
  });

  return (
    <div className="messages">
      <div className="messages__header">
        <img
          src={selectedChat?.photo}
          alt="avatar"
          className="messages__header-avatar"
        />
        <p className="messages__header-name">{selectedChat?.name}</p>
      </div>
      <div
        className="messages__content"
        ref={refScroll}
      >
        {
          filteredMessages.map((message => {
            return (message.direction === 'from_me') ? (
              <MessageFromMe message={message} />
            ) : (
              <MessageToMe message={message} photo={selectedChat?.photo} />
            );
          }))
        }
      </div>
      <div className="messages__footer">
        <form onSubmit={handleSubmit} className="messages__footer-form" action="">
          <input
            className="messages__footer-input"
            type="text"
            placeholder="Type your message"
            value={currentInput}
            onChange={handleInput}
          />
          <button
            className="messages__footer-button"
            type="button"
            onClick={addMessageHandler}
          >
          </button>
        </form>
      </div>
    </div>
  );
};
