import React from 'react';
import { Row, Typography } from 'antd';

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons';

const { Text } = Typography;



const Footer: React.FC = () => {

  return (
    <>
      <Row align="center">
        <FacebookOutlined />
        <TwitterOutlined />
        <InstagramOutlined />
      </Row>
      
      <Row align="center">
        <Text style={{ margin: 15, fontSize: 14 }}>&copy; Copyright Ping. All rights reserved</Text>
      </Row>
    </>
  );
};

export default Footer;