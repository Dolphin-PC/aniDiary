import styled from "@emotion/styled"

export default function CardComponent(props) {
    const imgSrc = props.imageSrc.src;

    return <>
        <div className="card">
        </div>

        <style jsx>{`
            div.card{
                height:80vh;
                margin: 10px 30px 100px 30px;
                border-radius:50px;
                background: no-repeat url(${imgSrc});
            }
            `}</style>
    </>
};

