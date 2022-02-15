import Image from "next/image";

export default function Header(): JSX.Element {
    return <div className="container">
        <div className="logo">
            <Image
                src="/vercel.svg"
                alt="logo"
                width={100}
                height={33}
                layout='responsive'
            />
        </div>
        <p>fsdf</p>

        <style jsx>{`
            div.container {
                height:10vh;
                display:flex;
                align-items:center;
                justify-content:space-between;
                padding: 0px 10px;
                position:sticky;
                top:0;
                background-color:white;
            }
            div.logo{
                width:100px;
            }
            
            `}</style>
    </div>
};
