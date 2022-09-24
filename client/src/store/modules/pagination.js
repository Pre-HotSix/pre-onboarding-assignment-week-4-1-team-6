const USERPAGINATION = 'pagination/usersPagination';

export const paginationAction = (page) => {
  return {
    type: USERPAGINATION,
    page,
  };
};

const initialState = 1;

export const paginationReducer = (state = initialState, action) => {
  if (action.type === USERPAGINATION) {
    return action.page;
  }

  return state;
};
