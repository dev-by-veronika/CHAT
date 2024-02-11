import { State } from '../react-app-env.d';

export const getChatsSelector = (state: State) => state.chats;
export const getSelectedChatIdSelector = (state: State) => state.selectedChatId;
export const getMessagesSelector = (state: State) => state.messages;
export const getSearchSelector = (state: State) => state.search;
