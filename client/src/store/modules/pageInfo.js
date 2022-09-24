const CURRENTPAGE = 'currentPage/currentPage';
export const currentPageAction = (currentPage) => {
  return {
    type: CURRENTPAGE,
    currentPage,
  };
};

const initialState = {
  currentUrl: '/',
};

export const pageInfoReducer = (state = initialState, action) => {
  if (action.type === CURRENTPAGE) {
    return action.currentPage;
  }
  return state;
};
