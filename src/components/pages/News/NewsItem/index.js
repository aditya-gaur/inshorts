import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import { truncate } from "../../../../utils/truncate";
import Icon from "../../components/Icon";

const limit = 256;

export default ({ item, handleBookmark, handleLike }) => {
  const {
    id,
    title,
    href,
    author,
    content,
    urlToImage,
    bookmarks,
    likes
  } = item;

  return (
    <List.Item
      key={title}
      actions={[
        <Icon
          onClick={handleBookmark.bind(this, id)}
          type="book-o"
          text={bookmarks}
        />,
        <Icon onClick={handleLike.bind(this, id)} type="like-o" text={likes} />
      ]}
      extra={<img className="image__small" alt="logo" src={urlToImage} />}
    >
      <List.Item.Meta
        title={<a href={href}>{title}</a>}
        description={`- ${author}`}
      />
      {truncate(content, limit)} <Link to={`/news/${id}`}>more</Link>
    </List.Item>
  );
};
