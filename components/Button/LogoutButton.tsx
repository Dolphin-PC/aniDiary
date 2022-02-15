import { Button } from "@mui/material"

import { getAuth, signOut } from 'firebase/auth';

import Router from 'next/router';

export default function LogoutButton(props): JSX.Element {

    function Logout() {
        signOut(getAuth()).then(() => {
            console.log('정상적으로 로그아웃 되었습니다.');
            Router.push('/');
        })
    }

    return (
        <Button onClick={Logout}>로그아웃</Button>
    )
};

