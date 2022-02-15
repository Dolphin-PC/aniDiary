import Link from "next/link";
import { useRouter } from "next/router";


export default function Bottom(props): JSX.Element {
    const router = useRouter();

    function clickOnTab(pathname) {
        router.push(pathname);
    }
    return <>
        <div className="container">
            <div className="main" onClick={() => clickOnTab('main')}>
                main
            </div>
            <div className="diary" onClick={() => clickOnTab('diary')}>
                diary
            </div>
            <div className="gallery" onClick={() => clickOnTab('gallery')}>
                gallery
            </div>
            <div className="setting" onClick={() => clickOnTab('setting')}>
                setting
            </div>
        </div>

        <style jsx>{`
            div.container {
                height:5vh;
                width:100%;
                position:sticky;
                bottom:0;
                display:flex;
                justify-content:space-around;
                background-color:white;
                border-top : 1px solid lightgrey;
            }

            div.container > div {
                cursor:pointer;
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                
            }
            `}</style>
    </>
};
