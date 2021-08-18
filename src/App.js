import React, {useState} from 'react';
import { auth, GoogleAuth,  FacebookAuth} from './firebase';
import {Button} from "@material-ui/core"


function App() {
  
  const signIn = () => {
      auth.signInWithPopup(FacebookAuth)
  }
    
    const login = () => {
      auth.signInWithPopup(GoogleAuth)
    }

  

  return (
    <div>
     <Button onClick={signIn} variant="contained" color="primary">Facebook</Button>
    <Button onClick={login} variant="contained" color="primary">Google</Button>
   </div>     
    )
}

export default App
