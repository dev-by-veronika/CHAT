import React, { useState } from 'react';
import './Search.scss';
import { useDispatch } from 'react-redux';
import { setSearchAction } from '../../store/actions';

export const Search: React.FC = () => {
  const [currentInput, setCurrentInput] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
    dispatch(setSearchAction(event.target.value));
  };

  return (
    <div className="search">
      <img
        src="./images/koala.jpg"
        alt="avatar"
        className="search__avatar"
      />
      <input
        type="text"
        className="search__input"
        placeholder="Search or start new chat"
        onChange={inputHandler}
        value={currentInput}
      />
    </div>
  );
};
