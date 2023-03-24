import { RootState } from './../store';
import { createSelector } from 'reselect';
import { UserState } from './user-reducer';


export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);