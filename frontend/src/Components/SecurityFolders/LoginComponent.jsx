import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from '../Service/AuthenticationService';


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'admin',
            password: 'qwe',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        if (this.state.username === 'admin' && this.state.password === 'qwe') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)


            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <div className='container' style={{ border: "2px solid gray", padding: "3em", borderRadius: "50px" }}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div className="alert alert-success">Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    <label className="form-label">Kullanıcı Adı: </label>
                    <input type="text" className='form-control' name="username" value={this.state.username} onChange={this.handleChange} />
                    <label className="form-label">Şifre: </label>
                    <input type="password" className='form-control' name="password" value={this.state.password} onChange={this.handleChange} />
                    <br></br>
                    <button className="btn btn-success" style={{ float:"right"}} onClick={this.loginClicked}>Login</button>
                    <br />
                    <br />
                    <br />
                    <div class="btn-group" style={{width:"100%"}} role="group" aria-label="Basic example">
                        <Link type="button" class="btn btn-primary" to="/">Ana Sayfaya Git</Link>
                        {isUserLoggedIn &&<Link type="button" to="/Admin" class="btn btn-warning">Admin Paneli</Link>}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent