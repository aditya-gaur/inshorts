export default (state = { list: [] }, action) => {
  switch (action.type) {
    case "NEWS_LIST_SUCCESS":
      return {
        ...state,
        list: action.payload
      };
    case "NEWS_LIST_ERROR":
      return {
        ...state
      };
    case "NEWS_SHOW_SUCCESS":
      const { list } = state;
      const item = state.list.filter(item => item.id === action.payload);
      return {
        ...state,
        item: item ? item[0] : {}
      };
    case "NEWS_SHOW_ERROR":
      return {
        ...state
      };
    case "BOOKMARK_NEWS_SUCCESS":
      state.list.map(item => {
        if (item.id === action.payload.id) {
          item.bookmarks = action.payload.status
            ? --item.bookmarks
            : ++item.bookmarks;
        }
        return item;
      });
      return {
        ...state
      };
    case "BOOKMARK_NEWS_ERROR":
      return {
        ...state
      };
    case "LIKE_NEWS_SUCCESS":
      state.list.map(item => {
        if (item.id === action.payload.id) {
          item.likes = action.payload.status ? --item.likes : ++item.likes;
        }
        return item;
      });

      return {
        ...state
      };
    case "LIKE_NEWS_ERROR":
      return {
        ...state
      };
    default:
      return state;
  }
};
