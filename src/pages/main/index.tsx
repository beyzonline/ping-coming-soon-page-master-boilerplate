import React from 'react';
import { Col, Row } from "antd";

import FormControl from '@/component/form-control/FormControl';
import Logo from '@/component/logo/Logo';
import Dashboard from '@/component/dashboard/Dashboard';
import Footer from '@/component/footer/Footer';
import Header from '@/component/header/Header';



const Main = () => { 

  return (
    <>
      <Row justify="center" style={{ marginTop: 50, marginBottom: 30}}>
        <Col>
          <Logo/>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row justify="center"  style={{ marginTop: 20, marginBottom: 60}}>
        <Col>
          <FormControl />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Dashboard/>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Footer/>
        </Col>
      </Row>
    </>
  );
};

export default Main;
