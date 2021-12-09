import React from 'react';
import '../stylesheets/login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../stateProvider';
import { actionTypes } from '../reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((err) => {
                alert(err);
            })

    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-ex8w65/Slack_RGB.svg" alt="" />
                <h1>Sign in to Slack Clone</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
