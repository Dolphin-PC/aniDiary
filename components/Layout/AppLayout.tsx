import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import Bottom from "./Bottom";
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
            <Bottom />
        </>
    )
}


export default AppLayout;