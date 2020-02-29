import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Sidebar extends Component {
    render() {
        return (
    <div className="left-side-menu">
      <div className="slimscroll-menu">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          <ul className="metismenu" id="side-menu">
            <li className="menu-title">Navigation</li>
            <li>
              <a href="index.html">
                <i className="mdi mdi-view-dashboard" />
                <span> Dashboard </span>
              </a>
                <a href="users">
                <i className="mdi mdi-view-dashboard" />
                <span> Users </span>
              </a>
            </li>
        
          </ul>
        </div>
        {/* End Sidebar */}
        <div className="clearfix" />
      </div>
      {/* Sidebar -left */}
    </div>
        )
    }
}
