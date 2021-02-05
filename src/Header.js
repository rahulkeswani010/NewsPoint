import React from 'react';
import './App.css';
export default function Header(props) {
  return (
      <header className="header">
      <nav class="navbar navbar-light bg-faded navbar-static-top header" id="navbar">
      <a class="navbar-brand" href="#">NewsPoint</a>
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#newspoint"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#saved">Read Later</a>
        </li>
      </ul>
    </nav>
    </header>
  );
}
