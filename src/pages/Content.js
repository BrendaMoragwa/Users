import React, { Component } from 'react';
import Header from '../includes/Header';
import Sidebar from '../includes/Sidebar';
import Footer from '../includes/Footer';
import '../assets/css/app.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/icons.min.css';
import Profile from '../assets/images/users/avatar-4.jpg';
import Logo from '../assets/images/logo-sm.png';

export default class Content extends Component {
    
    render() {
        return (
           <div>
  <div id="wrapper">
    {/* Topbar Start */}
    <Header />
    {/* ========== Left Sidebar Start ========== */}
    <Sidebar />
    {/* Left Sidebar End */}
    {/* ============================================================== */}
    {/* Start Page Content here */}
    {/* ============================================================== */}
    <div className="content-page">
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="javascript: void(0);">Uplon</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
                <h4 className="page-title">Dashboard</h4>
              </div>
            </div>
          </div>     
          {/* end page title */} 
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="card-box tilebox-one">
                <i className="icon-layers float-right m-0 h2 text-muted" />
                <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                <h3 className="my-3" data-plugin="counterup">1,587</h3>
                <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted">From previous period</span>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card-box tilebox-one">
                <i className="icon-paypal float-right m-0 h2 text-muted" />
                <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                <h3 className="my-3">$<span data-plugin="counterup">46,782</span></h3>
                <span className="badge badge-danger mr-1"> -29% </span> <span className="text-muted">From previous period</span>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card-box tilebox-one">
                <i className="icon-chart float-right m-0 h2 text-muted" />
                <h6 className="text-muted text-uppercase mt-0">Average Price</h6>
                <h3 className="my-3">$<span data-plugin="counterup">15.9</span></h3>
                <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted">From previous period</span>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card-box tilebox-one">
                <i className="icon-rocket float-right m-0 h2 text-muted" />
                <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                <h3 className="my-3" data-plugin="counterup">1,890</h3>
                <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
              </div>
            </div>
          </div>
          {/* end row */}
        </div> {/* end container-fluid */}
      </div> {/* end content */}
      <Footer />
    </div>
    {/* ============================================================== */}
    {/* End Page content */}
    {/* ============================================================== */}
  </div>
  {/* END wrapper */}
  {/* Right Sidebar */}
  <div className="right-bar">
    <div className="rightbar-title">
      <a href="javascript:void(0);" className="right-bar-toggle float-right">
        <i className="mdi mdi-close" />
      </a>
      <h4 className="font-18 m-0 text-white">Theme Customizer</h4>
    </div>
    <div className="slimscroll-menu">
      <div className="p-4">
        <div className="alert alert-warning" role="alert">
          <strong>Customize </strong> the overall color scheme, layout, etc.
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-3">
          <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" defaultChecked />
          <label className="custom-control-label" htmlFor="light-mode-switch">Light Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-3">
          <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css" data-appstyle="assets/css/app-dark.min.css" />
          <label className="custom-control-label" htmlFor="dark-mode-switch">Dark Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-5">
          <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appstyle="assets/css/app-rtl.min.css" />
          <label className="custom-control-label" htmlFor="rtl-mode-switch">RTL Mode</label>
        </div>
        <a href="https://1.envato.market/XY7j5" className="btn btn-danger btn-block mt-3" target="_blank"><i className="mdi mdi-download mr-1" /> Download Now</a>
      </div>
    </div> {/* end slimscroll-menu*/}
  </div>
  {/* /Right-bar */}
</div>

        )
    }
}
