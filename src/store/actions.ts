import { Chat, Message } from '../react-app-env.d';

export const LOAD_CHATS = 'LOAD_CHATS';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SELECTED_CHAT_ID = 'SET_SELECTED_CHAT_ID';

export const setSelectedChatIdAction = (payload: number) => ({
  type: SET_SELECTED_CHAT_ID,
  payload,
});

export const loadChatsAction = (payload: Chat[]) => ({
  type: LOAD_CHATS,
  payload,
});

export const loadMessagesAction = (payload: Message[]) => ({
  type: LOAD_MESSAGES,
  payload,
});

export const setSearchAction = (payload: string) => ({
  type: SET_SEARCH,
  payload,
});
