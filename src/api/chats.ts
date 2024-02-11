export const getChats = async () => {
  const response = await fetch('https://my-json-server.typicode.com/ArtemKa2208/Reenbit/chats');

  return response.json();
};
