import { getAuth, onAuthStateChanged } from "firebase/auth";
import Router from "next/router";
import { useState } from "react";
import SplashBox from "../containers/Splash/SplashBox";

const SplashPage = () => {
    return (
        <SplashBox />
    )
}


export default SplashPage;