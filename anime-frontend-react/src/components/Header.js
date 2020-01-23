import React from 'react';
import { useCurrentUser } from "../useCurrentUser";
import {history} from "../history"
import background from '../images/header-cloud.jpg'


export function Header() {
    
    const currentUser = useCurrentUser()
    console.log(currentUser)

    function signOutUser() {
      console.log("signout running")
      fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      })
      .then(history.push('/login'))
    }


        return (
          <div className="ui clearing segment" style={{ backgroundImage: `url(${background})`}}>
            <h3 className="ui left floated header">Anime</h3>
            {currentUser === null ? 
            null
            : 
            <div className="ui right floated header">
              <h3>Hello, {currentUser.firstName}!</h3>
              <button className="ui pink button" onClick={()=> signOutUser()}>Sign Out</button>
            </div>
            }
          </div>
        );

    
}