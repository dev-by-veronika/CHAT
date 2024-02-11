import React, { useEffect } from 'react';
import './Contacts.scss';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getChats } from '../../api/chats';
import { loadChatsAction, loadMessagesAction, setSelectedChatIdAction } from '../../store/actions';
import { getChatsSelector, getMessagesSelector, getSearchSelector } from '../../store/selectors';
import { getMessages } from '../../api/message';

export const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const chats = useSelector(getChatsSelector);
  const messages = useSelector(getMessagesSelector);
  const search = useSelector(getSearchSelector);

  useEffect(() => {
    const loadDataFromServer = async () => {
      const responseChats = await getChats();
      const responseMessages = await getMessages();

      dispatch(loadMessagesAction(responseMessages));
      dispatch(loadChatsAction(responseChats));
    };

    loadDataFromServer();
  }, []);

  const selectChat = (chatId: number) => {
    dispatch(setSelectedChatIdAction(chatId));
  };

  const getLastMessage = (id: number, type: string) => {
    const filteredMessages = messages.filter((message) => {
      return message.chatId === id;
    });

    const messagesLength = filteredMessages.length;

    if (type === 'message') {
      if (!filteredMessages.length) {
        return 'Say hello';
      }

      return filteredMessages[messagesLength - 1].body || '';
    }

    if (!filteredMessages.length) {
      return '';
    }

    const dateNow = new Date(filteredMessages[messagesLength - 1].date);

    return format(dateNow, 'MMM d, yyyy');
  };

  const filteredChats = chats.filter((chat) => {
    return chat.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="chats">
      <p className="chats__title">Chats</p>
      {
        filteredChats.map(chat => (
          <div
            key={chat.id}
            className="chats__chat chat"
            role="button"
            aria-hidden="true"
            onClick={() => selectChat(chat.id)}
          >
            <img
              src={chat.photo}
              alt="avatar"
              className="chat__img"
            />
            <div className="chat__info">
              <div className="chat__date-name">
                <p>{chat.name}</p>
                <p className="chat__date">{getLastMessage(chat.id, 'date')}</p>
              </div>
              <p className="chat__message">{getLastMessage(chat.id, 'message')}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};
