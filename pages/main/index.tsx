import Card from "../../components/Card/Card";

import testImage from '../../assets/image/image1.jpeg';

export default function MainPage(): JSX.Element {
    return (
        <div >
            <Card imageSrc={testImage} />
            <Card imageSrc={testImage} />
        </div>
    )

};
