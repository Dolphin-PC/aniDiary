import { Box, Paper } from "@mui/material";
import LogoutButton from "../../components/Button/LogoutButton";
import Card from "../../components/Card/Card";

import testImage from '../../assets/image/image1.jpeg';

const MainPage = () => {
    return (
        <div >
            <Card imageSrc={testImage} />
            <Card imageSrc={testImage} />
        </div>
    )
}

export default MainPage;