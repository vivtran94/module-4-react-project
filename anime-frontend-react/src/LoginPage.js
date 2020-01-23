import React from 'react';
import {Link} from 'react-router-dom';
import {history} from "./history"

export default class LoginPage extends React.Component {

    state = ({
        usernameInputValue: "",
        passwordInputValue: "",
        errorMessage: "",
    })

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'Content-Type' : 'application/json'}, 
            body: JSON.stringify({
                username: this.state.usernameInputValue,
                password: this.state.passwordInputValue
            })
        })
            .then(res => res.json())
            .then(login => {
                
                if (login.error) {
                    this.setState({ errorMessage: login.error})
                } else {
                    history.push('/')
                }
            })
    }

    render () {
        return (
            <div className="App" >
                <h1>Log In</h1>
                <form >
                    <div className="ui input">
                        <input type="text" placeholder="Username"
                        onChange={event => this.setState({ usernameInputValue: event.target.value })}
                        value={this.state.usernameInputValue}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ui input">
                        <input type="text" placeholder="Password" 
                        onChange={event => this.setState({ passwordInputValue: event.target.value })}
                        value={this.state.passwordInputValue}/>
                    </div>
                    <br></br>
                    <p style={{color:"red"}}>{this.state.errorMessage}</p>
                    <br></br>
                    <button className="ui blue button" onClick={this.handleSubmit}>Log In</button>
                    <Link className="ui pink button" to={'/signup'}>Sign Up</Link>

                </form>
              
            </div>
        )
    }
}
