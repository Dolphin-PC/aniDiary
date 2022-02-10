import { getAuth, onAuthStateChanged } from "firebase/auth";
import Router from "next/router";
import { useEffect } from "react";

const SplashBox = () => {
    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                Router.push('/main');
            } else {
                Router.push('/login')
            }

            console.log(user);
        })
    }, [])

    return (
        <h1>Splash Page</h1>
    )
};

export default SplashBox;