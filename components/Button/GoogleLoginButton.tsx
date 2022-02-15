
import { getAuth, signInWithRedirect, GoogleAuthProvider, Auth, User, getRedirectResult, signInWithPopup, setPersistence, browserLocalPersistence } from "firebase/auth";
import GoogleImg from '../../assets/image/btn_google_signin_light_normal_web.png';

interface PropTypes {
    text: String;

}

export default function GoogleLoginButton(props: PropTypes): JSX.Element {

    function signIn() {
        const auth = getAuth();
        setPersistence(auth, browserLocalPersistence);
        signInWithRedirect(auth, new GoogleAuthProvider());
    }

    return (
        <>
            <div style={loginBtnStyle} onClick={signIn}></div>
        </>
    );

};



const loginBtnStyle = {
    background: `no-repeat center/90% url(${GoogleImg.src})`,
    width: '300px',
    height: '60px',
    cursor: 'pointer',
}


