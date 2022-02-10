import { Button } from "@mui/material";
import { sign } from "crypto";

import { getAuth, signInWithRedirect, GoogleAuthProvider, Auth, User, getRedirectResult, signInWithPopup, setPersistence, browserLocalPersistence } from "firebase/auth";
import Router from "next/router";
import { useEffect, useState } from "react";



interface PropTypes {
    text: String;

}

const GoogleLoginButton: React.FC<PropTypes> = (props) => {


    function signIn() {
        const auth = getAuth();
        setPersistence(auth, browserLocalPersistence);
        const provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider).then(res => {
            Router.push('/main');
        })

        // getRedirectResult(auth).then((res) => {
        //     console.log('res', res);
        //     console.log('user', res.user);
        // })
    }

    return (
        <Button onClick={signIn}>{props.text}</Button>
    );
}


export default GoogleLoginButton;