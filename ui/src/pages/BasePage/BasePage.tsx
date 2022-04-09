import React, {FC} from 'react';
import './BasePage.css';
import {Route, Routes} from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import RegPage from '../RegPage/RegPage';
import SubMenu1Page from '../SubMenu1Page/SubMenu1Page';
import SubMenu2Page from '../SubMenu2Page/SubMenu2Page';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainMenu from '../../components/Menu/Menu';

interface BasePageProps {
}

const BasePage: FC<BasePageProps> = () => (
    <div className="BasePage" data-testid="BasePage">

        <Container maxWidth="lg">
            <MainMenu />
            <Box sx={{my: 4}}>
                <Routes>
                    <Route path="/" element={<SubMenu1Page />} />
                    <Route path="about" element={<SubMenu2Page />} />
                    <Route path="auth" element={<AuthPage />} />
                    <Route path="registration" element={<RegPage />} />
                </Routes>

            </Box>
        </Container>
    </div>
);

export default BasePage;
