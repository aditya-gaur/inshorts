import React, { Component } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import "./App.css";
import Routes from "../routes";

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <Header>
          <Link to="/">Home</Link>
        </Header>
        <Content>
          <Routes />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
