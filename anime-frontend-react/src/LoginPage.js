import React from 'react';
import AnimeIndex from './components/AnimeIndex';
import { Link } from 'react-router-dom';

export default class LoginPage extends React.Component {

    state = ({
        usernameInputValue: "",
        passwordInputValue: "",
        errorMessage: "",
        loggedInUser: null,
    })

        
    setLoggedInUser = user => {
        console.log("running setloggedinuser");
        this.setState({
          loggedInUser: user,
        });
       
      };
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
                    this.setLoggedInUser(login.user)
                }
            })
    }

    render () {
        console.log(this.state.loggedInUser)
        if (this.state.loggedInUser !== null) {
            return (
            <AnimeIndex />
            )
        }
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
                    <p style={{color:"red"}}>{this.state.errorMessage} </p>
                    <Link to="/" onClick={this.handleSubmit} className="ui blue button">Submit</Link>
                </form>
              
            </div>
        )
    }
}
