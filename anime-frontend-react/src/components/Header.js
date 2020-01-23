import React from 'react';
import { useCurrentUser } from "../useCurrentUser";


export function Header () {
    
    const currentUser = useCurrentUser()

        return (
          <div className="ui clearing segment">
            {currentUser == null ? 
            <h3 className="ui right floated header"></h3> 
            : 
            <h3 className="ui right floated header">Hello, {currentUser.firstName}!</h3>}
            <h3 className="ui left floated header">Anime</h3>
          </div>
        );
}