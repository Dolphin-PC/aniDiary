import { Container } from '@mui/material';
import Animation from '../../components/Animation/Animation';

const Box = (props) => {
    return (
        <>
            <Container component="main" maxWidth="md">
                <Animation
                    animationName='animal'
                    width={150}
                    height={150}
                />
            </Container>
        </>
    )
}

export default Box;
