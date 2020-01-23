import React from 'react';
import {history} from "./history";

export default class SignUpPage extends React.Component {

    state = ({
        firstnameInputValue: "",
        lastnameInputValue: "",
        usernameInputValue: "",
        passwordInputValue: "",
    })
       
    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'Content-Type' : 'application/json'}, 
            body: JSON.stringify({
                firstname: this.state.firstnameInputValue,
                lastname: this.state.lastnameInputValue,
                username: this.state.usernameInputValue,
                password: this.state.passwordInputValue
            })
        })
            .then(res => res.json())
            .then(history.push('/'))
    }

    render () {
        return (
            <div className="App">
                <h1>Sign Up</h1>
                <form>
                    <div className="ui input">
                        <input type="text" placeholder="Enter your first name"
                        onChange={event => this.setState({ firstnameInputValue: event.target.value })}
                        value={this.state.firstnameInputValue}/>
                    </div>
                        <br></br>
                        <br></br>
                    <div className="ui input">
                        <input type="text" placeholder="Enter your last name"
                        onChange={event => this.setState({ lastnameInputValue: event.target.value })}
                        value={this.state.lastnameInputValue}/>
                    </div>
                        <br></br>
                        <br></br>
                    <div className="ui input">
                        <input type="text" placeholder="Enter a username"
                        onChange={event => this.setState({ usernameInputValue: event.target.value })}
                        value={this.state.usernameInputValue}/>
                    </div>
                        <br></br>
                        <br></br>
                    <div className="ui input">
                        <input type="text" placeholder="Enter a password"
                        onChange={event => this.setState({ passwordInputValue: event.target.value })}
                        value={this.state.passwordInputValue}/>
                    </div>
                        <br></br>
                        <br></br>
                        <p style={{color:"red"}}>{this.state.errorMessage} </p>
                        <button className="ui blue button" onClick={this.handleSubmit}>Create an Account</button>
                </form>
                
            </div>
            
        )
    }
}