import React from 'react';
import {Link} from 'react-router-dom';
import {history} from "./history";
import background from './images/background.jpg'

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
                
                if (login.failed) {
                    this.setState({ errorMessage: login.message})
                } else {
                    history.push('/')
                }
            })
    }

    render () {
        return (
            <div className="App" style={{ backgroundImage:`url(${background})`, height: "100vh"}}>
                <h1 style={{color:'white'}}>Log In</h1>
                <form >
                    <div className="ui input">
                        <input type="text" placeholder="Username"
                        onChange={event => this.setState({ usernameInputValue: event.target.value })}
                        value={this.state.usernameInputValue}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ui input">
                        <input type="password" placeholder="Password" 
                        onChange={event => this.setState({ passwordInputValue: event.target.value })}
                        value={this.state.passwordInputValue}/>
                    </div>
                    <br></br>
                    {this.state.errorMessage.length > 1 ? 
                    <p className="ui pointing red basic label">{this.state.errorMessage}</p>
                    :
                    null
                    }
                    <br></br>
                    <br></br>
                    <button className="ui blue button" onClick={this.handleSubmit}>Log In</button>
                    <Link className="ui pink button" to={'/signup'}>Sign Up</Link>

                </form>
              
            </div>
        )
    }
}
