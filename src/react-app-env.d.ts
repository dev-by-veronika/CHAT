/// <reference types="react-scripts" />

export type Chat = {
  id: number,
  name: string,
  photo: string
};

export type Message = {
  body: string,
  time: string,
  date: string,
  direction: string,
  chatId: number,
  fullDate: number,
};

export type State = {
  chats: Chat[],
  messages: Message[],
  selectedChatId: number,
  search: string,
};
