import { Alert, Snackbar } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {

    return (
        <>
            {children}
        </>
    )
}


export default AppLayout;