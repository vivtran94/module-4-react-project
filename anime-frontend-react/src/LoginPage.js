import React from 'react';
import AnimeIndex from './components/AnimeIndex';
import {Link} from 'react-router-dom';

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
                if (login.failed) {
                    this.setState({ errorMessage: login.message })
                } else {
                    this.setLoggedInUser(login.user)
                }
            })
    }

    render () {
        console.log(this.state.loggedInUser)
        if (this.state.loggedInUser !== null) {
            return <AnimeIndex currentUser={this.state.loggedInUser}/>
        }
        return (
            <div class="App" >
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
