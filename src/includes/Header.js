import React, { Component } from 'react'
import Profile from '../assets/images/users/avatar-4.jpg';
import Logo from '../assets/images/logo-sm.png';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      token: '',
    }
  }
  componentDidMount(){
    let userData = localStorage.getItem("userData");
    if(userData ==="" || userData === null){
      window.location.href = "/";
    }else{
      let x = JSON.parse(userData);
      this.setState({first_name: x.first_name, token: x.token});
    }

  }

  logout = () => {
    localStorage.removeItem("userData");
    localStorage.clear(); 
    window.location.href="/";
}
    render() {
        return (
              <div id="wrapper">
    {/* Topbar Start */}
    <div className="navbar-custom" style ={{backgroundColor: '#44BA9A'}}>
      <ul className="list-unstyled topnav-menu float-right mb-0">
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle  waves-effect waves-light text-white" data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="mdi mdi-bell-outline noti-icon" style = {{color: 'white'}} />
            <span className="noti-icon-badge" />
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-lg">
            {/* item*/}
            <div className="dropdown-item noti-title">
              <h5 className="font-16 text-white m-0">
                <span className="float-right">
                  <a href="index.html" className="text-white">
                    <small>Clear All</small>
                  </a>
                </span>Notification
              </h5>
            </div>
            <div className="slimscroll noti-scroll">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-success">
                  <i className="mdi mdi-settings-outline" />
                </div>
                <p className="notify-details">New settings
                  <small className="text-muted">There are new settings available</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-bell-outline" />
                </div>
                <p className="notify-details">Updates
                  <small className="text-muted">There are 2 new updates available</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-danger">
                  <i className="mdi mdi-account-plus" />
                </div>
                <p className="notify-details">New user
                  <small className="text-muted">You have 10 unread messages</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">Caleb Flakelar commented on Admin
                  <small className="text-muted">4 days ago</small>
                </p>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-secondary">
                  <i className="mdi mdi-heart" />
                </div>
                <p className="notify-details">Carlos Crouch liked
                  <b>Admin</b>
                  <small className="text-muted">13 days ago</small>
                </p>
              </a>
            </div>
            {/* All*/}
            <a href="javascript:void(0);" className="dropdown-item text-primary notify-item notify-all">
              View all
              <i className="fi-arrow-right" />
            </a>
          </div>
        </li>
        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src={Profile} alt="user-image" className="rounded-circle" />
            <span className="d-none d-sm-inline-block ml-1 font-weight-medium text-white">{this.state.first_name}</span>
            <i className="mdi mdi-chevron-down d-none d-sm-inline-block" />
          </a>
          <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
            {/* item*/}
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow text-white m-0">Welcome !</h6>
            </div>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-account-outline" />
              <span>Profile</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-settings-outline" />
              <span>Settings</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-lock-outline" />
              <span>Lock Screen</span>
            </a>
            <div className="dropdown-divider" />
            {/* item*/}
            <a href="javascript:void(0);" onClick = {this.logout} className="dropdown-item notify-item">
              <i className="mdi mdi-logout-variant" />
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      {/* LOGO */}
      <div className="logo-box">
        <a href="index.html" className="logo text-center logo-dark">
          <span className="logo-lg">
            <img src={Logo} alt="" height={22} /> Luckybox
            {/* <span class="logo-lg-text-dark">Uplon</span> */}
          </span>
          <span className="logo-sm">
            {/* <span class="logo-lg-text-dark">U</span> */}
            <img src={Logo} alt="" height={24} />
          </span>
        </a>
        <a href="index.html" className="logo text-center logo-light">
          <span className="logo-lg">
            <img src={Logo} alt="" height={22} />
            {/* <span class="logo-lg-text-dark">Uplon</span> */}
          </span>
          <span className="logo-sm">
            {/* <span class="logo-lg-text-dark">U</span> */}
            <img src={Logo} alt="" height={24} />
          </span>
        </a>
      </div>
      <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
          <button className="button-menu-mobile waves-effect waves-light">
            <i className="mdi mdi-menu" style ={{color: 'white'}}/>
          </button>
        </li>
        <li className="d-none d-sm-block">
          <form className="app-search">
            <div className="app-search-box">
              <div className="input-group" style = {{color: 'white'}}>
                <input type="text" className="form-control  bg-white" placeholder="Search..." />
                <div className="input-group-append" >
                  <button className="btn" type="submit" style = {{backgroundColor: '#f1b53d'}}>
                    <i className="fas fa-search text-white" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </div>
    {/* end Topbar */}
  </div>
        )
    }
}
