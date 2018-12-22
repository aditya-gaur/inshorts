export const newsList = () => dispatch => {
  fetch("data.json")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: "NEWS_LIST_SUCCESS",
        payload: data.articles
      })
    )
    .catch(err =>
      dispatch({
        type: "NEWS_LIST_ERROR",
        payload: err
      })
    );
};

export const newsShow = id => dispatch => {
  if (id) {
    dispatch({
      type: "NEWS_SHOW_SUCCESS",
      payload: id
    });
  } else {
    dispatch({
      type: "NEWS_SHOW_ERROR",
      payload: "No news id"
    });
  }
};

export const bookmarkNews = (id, status) => dispatch => {
  if (id) {
    dispatch({
      type: "BOOKMARK_NEWS_SUCCESS",
      payload: { id, status }
    });
  } else {
    dispatch({
      type: "BOOKMARK_NEWS_ERROR",
      payload: "Something went wrong"
    });
  }
};

export const likeNews = (id, status) => dispatch => {
  if (id) {
    dispatch({
      type: "LIKE_NEWS_SUCCESS",
      payload: { id, status }
    });
  } else {
    dispatch({
      type: "LIKE_NEWS_ERROR",
      payload: "Something went wrong"
    });
  }
};
