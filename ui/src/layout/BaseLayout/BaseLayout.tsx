import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AuthPage from '../../pages/AuthPage/AuthPage';
import RegPage from '../../pages/RegPage/RegPage';
import CoursesPage from '../../pages/CoursesPage/CoursesPage';
import MyCoursesPage from '../../pages/MyCoursesPage/MyCoursesPage';
import MainMenu from '../../components/Menu/Menu';
import './BaseLayout.css';

interface BaseLayoutProps {
}

const BaseLayout: FC<BaseLayoutProps> = () => (
    <div className="BaseLayout" data-testid="BaseLayout">

        <Container maxWidth="lg">
            <MainMenu />
            <Box sx={{my: 4}}>
                <Routes>
                    <Route path="/" element={<CoursesPage />} />
                    <Route path="my" element={<MyCoursesPage />} />
                    <Route path="auth" element={<AuthPage />} />
                    <Route path="registration" element={<RegPage />} />
                </Routes>

            </Box>
        </Container>
    </div>
);

export default BaseLayout;
