import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div className="text-xl flex justify-between items-center p-4 bg-red-600 text-white">
        <div>Mangaweb</div>
        <ul className="gap-4 flex">
          <li>Home</li>
          <li>Ranking</li>
          <li>Category</li>
          <li>Latest Updates</li>
        </ul>
      </div>
    );
  }
}
