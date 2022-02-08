import Link from "next/link";

const login = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <Link href="/">Back</Link>
        </div>
    )
};

export default login;
