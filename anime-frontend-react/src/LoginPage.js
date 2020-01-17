import React from 'react';

export default class LoginPage extends React.Component {

    state = ({
        usernameInputValue: "",
        passwordInputValue: "",
        errorMessage: ""
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
                if(login.failed){
                    this.setState({ errorMessage: login.message })
                } else {
                    this.props.setLoggedInUser(login.user)
                }
            })
    }

    render () {
        return (
            <div className="App">
                <h1>LOG IN</h1>
                <form>
                    <input type="text" placeholder="Username" 
                    onChange={event => this.setState({ usernameInputValue: event.target.value })}
                    value={this.state.usernameInputValue}/>
                    <br></br>
                    <input type="text" placeholder="Password" 
                    onChange={event => this.setState({ passwordInputValue: event.target.value })}
                    value={this.state.passwordInputValue}/>
                    <br></br>
                    <p>{this.state.errorMessage}</p>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
              
            </div>
        )
    }
}
