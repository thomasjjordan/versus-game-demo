import { createSlice } from '@reduxjs/toolkit';
import { setUserData, retrieveUserData } from '../helpers/userDataUtils';
import last from 'lodash/last';
import pull from 'lodash/pull';

const initialState = {
  users: retrieveUserData(),
  currentUserId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCurrentUser: (state, action) => {
      const { id } = action.payload;
      state.currentUserId = id;
    },
    addUser: (state, action) => {
      const { username } = action.payload;
      // check to see if user already exists
      const user = state.users.find(user => user.username === username);
      if (user) {
        return state;
      } else {
        const lastUser = last(state.users);
        const nextId = lastUser ? lastUser.id + 1 : 0;
        const newUser = {id: nextId, ...action.payload}
        const updatedUsders = [...state.users, newUser];
        setUserData(updatedUsders);
        return {...state, users: [...updatedUsders]}
      }
    },
    addFavorite: (state, action) => {
      const { id } = action.payload;
      const { users } = state;
      const currentUserId = state.currentUserId;
      // Add the favorite id to the current user's favorites
      users.find(user => user.id === currentUserId).favorites.push(id);
      return state
    },
    removeFavorite: (state, action) => {
      const { id } = action.payload;
      const { users } = state;
      const currentUserId = state.currentUserId;
      // remove the favorite id from the current user's favorites
      pull(users.find(user => user.id === currentUserId).favorites, id);
      return state
    },
  },
});


export const { addUser, updateCurrentUser, addFavorite, removeFavorite } = userSlice.actions;

export default userSlice.reducer;
