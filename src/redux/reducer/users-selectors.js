import {createSelector} from 'reselect';

const getUsersSelector = state => state.usersPage.users;
export const getPagesSize = state => state.usersPage.pagesSize;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsFetching = state => state.usersPage.isFetching;
export const getFollowingProgress = state => state.usersPage.followingProgress;

export const getUsers = createSelector( getUsersSelector, (users) => users.filter(u => true) )