import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Card, Row, Col, Divider } from "antd";
import moment from "moment";

import Icon from "../../components/Icon";
import {
  newsShow,
  bookmarkNews,
  likeNews
} from "../../../../actions/newsActions";

class NewsShow extends Component {
  constructor() {
    super();
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillMount() {
    const {
      match: { params }
    } = this.props;
    params.id && this.props.newsShow(+params.id);
  }

  handleBookmark(bookmarkState) {
    const {
      match: { params }
    } = this.props;
    this.props.bookmarkNews(+params.id, bookmarkState);
  }

  handleLike(likeState) {
    const {
      match: { params }
    } = this.props;
    this.props.likeNews(+params.id, likeState);
  }

  render() {
    const { item } = this.props.news;
    const {
      title,
      href,
      author,
      content,
      urlToImage,
      bookmarks,
      likes,
      publishedAt
    } = item || {};

    return (
      <Row>
        <Col span={20} offset={2}>
          <Card>
            <Card.Grid className="card__left">
              <h3>{title}</h3>
              <div className="author__title text__right">- {author}</div>
              <Divider />
              <p>{content}</p>
            </Card.Grid>
            <Card.Grid className="card__right">
              <img className="image__big" src={urlToImage} />
              <Divider />
              {moment(publishedAt).format("MMMM Do YYYY")}
              <div>
                <Icon
                  onClick={this.handleBookmark}
                  type="book-o"
                  text={bookmarks}
                />
                {"  "}
                <Icon onClick={this.handleLike} type="like-o" text={likes} />
              </div>
            </Card.Grid>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ newsShow, bookmarkNews, likeNews }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsShow);
