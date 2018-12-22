import React, { Component } from "react";
import { Row, Col } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NewsList from "./NewsList";
import { newsList, bookmarkNews, likeNews } from "../../../actions/newsActions";

class NewsContainer extends Component {
  constructor() {
    super();
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillMount() {
    const { list } = this.props.news;
    !list.length && this.props.newsList();
  }

  handleBookmark(id, bookmarkState) {
    this.props.bookmarkNews(id, bookmarkState);
  }

  handleLike(id, likeState) {
    this.props.likeNews(id, likeState);
  }

  render() {
    const { list } = this.props.news;
    return (
      <Row>
        <Col span={18} offset={3}>
          <NewsList
            handleBookmark={this.handleBookmark}
            handleLike={this.handleLike}
            data={list || []}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ newsList, bookmarkNews, likeNews }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
