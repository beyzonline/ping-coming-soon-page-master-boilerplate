import React from 'react';
import { Row, Col, Typography } from 'antd';


const { Text, Title } = Typography;


const Header: React.FC = () => {
  return (
    <>
      <Row align="middle">
        <Col>
          <Text type="secondary" style={{ fontSize: 34 }}>
            We are launching
          </Text>
        </Col>
        <Col>
          <Title level={1} style={{ margin: 0, paddingLeft: 6 }}>
            soon!
          </Title>
        </Col>
      </Row>
      <Row align="center" style={{ paddingLeft: 6 }}>
        <Text style={{ margin: 5, fontSize: 24 }}>Subscribe and get notified</Text>
      </Row>
    </>
  );
};

export default Header;