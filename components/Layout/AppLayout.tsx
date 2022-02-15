import { useRouter } from "next/router";
import Bottom from "./Bottom";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
    const router = useRouter();

    return (
        <div className="container">
            <Header />
            <div className="content">{children}</div>
            <Bottom />

            <style jsx>{`
                div.container {
                    height:100vh;
                    position:relative;
                    overflow:auto;
                }
                div.content { 
                    height:85vh;
                    overflow:auto;
                }
                `}</style>
        </div>
    )
};



