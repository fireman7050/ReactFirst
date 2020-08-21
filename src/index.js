import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./styles.css";

const node = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement(
        "h2",
        {
          className: "App",
          id: this.props.id
        },
        this.props.user
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

const appElement = React.createElement(Post, {
  id: 123,
  user: "Alex",
  content: "My content"
});

render(appElement, node);
