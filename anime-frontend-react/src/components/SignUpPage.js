import React from 'react';
import AnimeIndex from './AnimeIndex';

export default class SignUpPage extends React.Component {

    state = ({
        firstnameInputValue: "",
        lastnameInputValue: "",
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
            .then(res => { this.setState({ loggedInUser: res.user}) })
    }



    render () {
        if (this.state.loggedInUser !== null) {
            return <AnimeIndex currentUser={this.state.loggedInUser} />
        }
        return (
            <div className="App">
                <h1>Sign Up Page</h1>
                <form>
                    <input type="text" placeholder="Enter your first name"
                    onChange={event => this.setState({ firstnameInputValue: event.target.value })}
                    value={this.state.firstnameInputValue}/>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Enter your last name"
                    onChange={event => this.setState({ lastnameInputValue: event.target.value })}
                    value={this.state.lastnameInputValue}/>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Create a username"
                    onChange={event => this.setState({ usernameInputValue: event.target.value })}
                    value={this.state.usernameInputValue}/>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Create a password"
                    onChange={event => this.setState({ passwordInputValue: event.target.value })}
                    value={this.state.passwordInputValue}/>
                    <br></br>
                    <br></br>
                    <p style={{color:"red"}}>{this.state.errorMessage} </p>
                    <button className="ui blue button" onClick={this.handleSubmit}>Create an Account</button>
                </form>
                
            </div>
            
        )
    }
}