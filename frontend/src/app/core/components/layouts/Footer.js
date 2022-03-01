import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="text-center fixed-bottom">
          &copy; {new Date().getFullYear()} &middot; All rights reserved
        </div>
      </footer>
    );
  }
}
