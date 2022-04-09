import React, { FC } from 'react';
import './SubMenu1Page.css';
import ProTip from '../../components/ProTip/ProTip';
import Typography from '@mui/material/Typography';

interface SubMenu1PageProps {}

const SubMenu1Page: FC<SubMenu1PageProps> = () => (
  <div className="SubMenu1Page" data-testid="SubMenu1Page">
      <Typography variant="h4" component="h1" gutterBottom>
          Page 1
      </Typography>
      <ProTip />
  </div>
);

export default SubMenu1Page;
