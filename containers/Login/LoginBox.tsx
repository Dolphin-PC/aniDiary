import styled from '@emotion/styled';
import { Button, Container, Divider, Paper, Stack } from '@mui/material';

import Animation from '../../components/Animation/Animation';
import GoogleLoginButton from '../../components/Button/GoogleLoginButton';

const LoginBox = (props) => {
    return (
        <Row>
            <Animation
                animationName='animal'
                width='40vw'
            />

            <div>
                <h2>Ani Diary</h2>
                <Divider />
            </div>

            <ButtonContainer>
                {/* TODO 카카오 로그인 버튼 */}
                {/* <Button>카카오 로그인</Button> */}
                <GoogleLoginButton text="구글 로그인"></GoogleLoginButton>
            </ButtonContainer>

        </Row>

    )
}

const Row = styled.div({
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

const ButtonContainer = styled.div({
    position: 'fixed',
    bottom: '10vh',
    display: 'flex',
    flexDirection: 'column',
})



export default LoginBox;
