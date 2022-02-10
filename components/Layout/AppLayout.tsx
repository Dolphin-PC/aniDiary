import { Alert, Snackbar } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = (props) => {

    return (
        <>

            {props.children}
            {/* TODO Toast Message Component 만들기 */}
            {/* <Snackbar anchorOrigin={{ vertical, horizontal }}
                open={true}
                message="I love snacks"
            /> */}

        </>
    )
}


export default AppLayout;