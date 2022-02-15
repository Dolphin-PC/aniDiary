import { useRouter } from "next/router";
import Bottom from "./Bottom";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
    const router = useRouter();

    console.log(router.pathname);

    return (
        <>
            <Header />
            <div>{children}</div>
            <Bottom />
        </>
    )
};



