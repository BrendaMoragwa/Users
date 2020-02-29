import React from 'react';
import axios from 'axios';
const URLPATHLOGIN = 'http://localhost:4000/schoolmodule/v1/auth/login';

class Login extends React.Component{
		constructor(props){
				super(props)
					this.onSubmit = this.onSubmit.bind(this);
				this.state = {
						email_address: '',
						password: '',
						isSubmitted: false,
						error_message: '',
						isLoading: false,
				}

		}

		handleChange = event => {
				this.setState({[event.target.name]: event.target.value});
		};

			onSubmit = (e) => {
						e.preventDefault();
						this.setState({isLoading: true});
						if(this.state.email_address && this.state.password){
								let payload = {email_address: this.state.email_address, password: this.state.password}
								axios.post(URLPATHLOGIN, payload).
								then(response=>{
										if(response.data.status){
											localStorage.setItem("userData", JSON.stringify(response.data));
												window.location.href = "/dashboard";
												console.log(response.data.token);
												this.setState({isLoading: false})
										}else{
												this.setState({isLoading: false, isSubmitted: true, error_message: 'Wrong Email or password'});
										}
								})
						}else{
								this.setState({isLoading: false, isSubmitted: true, error_message: 'Email and password is required'});
						}
						this.setState({email_address: '', password: ''})
		}

		render() {
				return (
					<div className="account-pages pt-5 my-5">
					<div className="container">
					<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6 col-xl-5">
					<div className="account-card-box">
					<div className="card mb-0">
					<div className="card-body p-4">
					<div className="text-center">
					<div className="my-3">
					<a href="index.html">
					<span><img src="assets/images/logo.png" alt="" height={28} /></span>
					</a>
					</div>
					<h5 className="text-muted text-uppercase py-3 font-16">Sign In</h5>
					{this.state.isSubmitted ? <div style={{color:'red'}}>{this.state.error_message}</div>: null}
					</div>
					<form onSubmit={this.onSubmit} className="mt-2">
					<div className="form-group mb-3">
					<input type="email" className="form-control" name="email_address" value={this.state.email_address} placeholder="Email" onChange={this.handleChange} />
					</div>
					<div className="form-group mb-3">
					<input type="password" className="form-control" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}  />
					</div>
					<div className="form-group mb-3">
					<div className="custom-control custom-checkbox">
					<input type="checkbox" className="custom-control-input" id="checkbox-signin" defaultChecked />
					<label className="custom-control-label" htmlFor="checkbox-signin">Remember me</label>
					</div>
					</div>
					<div className="form-group text-center">
					<button type="submit" action={this.onSubmit} className="btn btn-primary btn-block btn-flat">{this.state.isLoading ? 'Submitting..' : 'Login'}</button>
					</div>
					<a href="pages-recoverpw.html" className="text-muted"><i className="mdi mdi-lock mr-1" /> Forgot your password?</a>
					</form>
				</div> {/* end card-body */}
				</div>
			{/* end card */}
			</div>
			</div></div></div></div>
						);
				}
		}

		export default Login;