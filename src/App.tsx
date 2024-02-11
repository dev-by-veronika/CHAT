import React from 'react';
import './reset.scss';
import './App.scss';
import { Contacts } from './components/Contacts/Contacts';
import { Search } from './components/Search/Search';
import { Messages } from './components/Messages/Messages';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__sidebar">
        <Search />
        <Contacts />
      </div>
      <Messages />
    </div>
  );
};
