import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter();

    console.log(router.pathname);

    return (
        <>
            <Header />
            {children}
        </>
    )
}


export default AppLayout;