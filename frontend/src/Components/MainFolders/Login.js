import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from '../Service/AuthenticationService';

function Login() {

    const [username, setUsername] = useState('deneme')
    const [password, setPassword] = useState('1111')

    const getLogin = () => {
        if (username !== '' && password !== '') {
            fetch("http://localhost:8080/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        localStorage.setItem("token", data.token)
                        AuthenticationService.registerSuccessfulLogin(username, password)
                    }
                    else {
                        console.log("not worked : " + data)
                        this.setState({ showSuccessMessage: false })
                        this.setState({ hasLoginFailed: true })
                    }
                })
        }
    }



    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
        <div className='container' style={{ border: "2px solid gray", padding: "3em", borderRadius: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <div className="container">
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {/* {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div className="alert alert-success">Login Sucessful</div>} */}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                <label className="form-label">Kullanıcı Adı: </label>
                <input type="text" className='form-control' name="username" defaultValue={"deneme"} onChange={(e) => setUsername(e.target.value)} />
                <label className="form-label">Şifre: </label>
                <input type="password" className='form-control' name="password" defaultValue={"1111"} onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <button className="btn btn-success" style={{ float: "right" }} onClick={getLogin}>Login</button>
                <br />
                <br />
                <br />
                <div class="btn-group" style={{ width: "100%" }} role="group" aria-label="Basic example">
                    <Link type="button" class="btn btn-primary" to="/">Ana Sayfaya Git</Link>
                    {isUserLoggedIn && <Link type="button" to="/Admin" class="btn btn-warning">Admin Paneli</Link>}
                </div>
            </div>
        </div>
    )
}
export default Login