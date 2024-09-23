import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
//Define a constant that holdes the action description
const ADD_ARTICLE = "article/addArticle";

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};
//Define an action creator function and export it to use it in components:
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article,
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
