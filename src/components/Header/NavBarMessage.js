import React, { Component } from 'react';

class NavBarMessage extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle mr-lg-2"
          id="messagesDropdown"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-fw fa-envelope" />
          <span className="d-lg-none">
            Messages
            <span className="badge badge-pill badge-primary">12 New</span>
          </span>
          <span className="indicator text-primary d-none d-lg-block">
            <i className="fa fa-fw fa-circle" />
          </span>
        </a>
        <div className="dropdown-menu" aria-labelledby="messagesDropdown">
          <h6 className="dropdown-header">New Messages:</h6>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            <strong>David Miller</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">
              Hey there! This new version of SB Admin is pretty awesome! These
              messages clip off when they reach the end of the box so they
              don't overflow over to the sides!
            </div>
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            <strong>Jane Smith</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">
              I was wondering if you could meet for an appointment at 3:00
              instead of 4:00. Thanks!
            </div>
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            <strong>John Doe</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">
              I've sent the final files over to you for review. When you're
              able to sign off of them let me know and we can discuss
              distribution.
            </div>
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item small" href="#">
            View all messages
          </a>
        </div>
      </li>
    );
  }
}

export default NavBarMessage;
