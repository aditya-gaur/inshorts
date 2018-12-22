import React from "react";
import { List } from "antd";

import NewsItem from "../NewsItem";

export default ({ data, handleLike, handleBookmark }) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 5
    }}
    dataSource={data}
    renderItem={item => (
      <NewsItem
        handleLike={handleLike}
        handleBookmark={handleBookmark}
        item={item}
      />
    )}
  />
);
