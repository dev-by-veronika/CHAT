import { createStore, AnyAction } from 'redux';
import { State } from '../react-app-env.d';
import {
  LOAD_CHATS,
  LOAD_MESSAGES,
  SET_SEARCH,
  SET_SELECTED_CHAT_ID,
} from './actions';

const initialState: State = {
  chats: [],
  messages: [],
  selectedChatId: 1,
  search: '',
};

// rootReducer - this function is called after dispatching an action
const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_CHATS:
      return {
        ...state,
        chats: [...action.payload],
      };
    case SET_SELECTED_CHAT_ID:
      return {
        ...state,
        selectedChatId: action.payload,
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
);

export default store;
