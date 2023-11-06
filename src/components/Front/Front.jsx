import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import img7 from '../../images/img7.png'
import './front.css'

function Front() {
  return (
    <div>
      <Container fluid="md" className='container-style'>
        <Row>
          <Col xs={12} md={6} className="column-style">
            <div className="container column-style">
                <img src={img1} alt="" />
                <div class="estrellas inverso">
                  <span>U</span>
                  <span>O</span>
                  <span>Y</span>
                  <span> </span>
                  <span>R</span>
                  <span>O</span>
                  <span>F</span>
                  <span> </span>
                  <span>E</span>
                  <span>D</span>
                  <span>A</span>
                  <span>M</span>
                </div>
                <div className='text1'>PISTONS</div>
            </div>
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
                <img src={img2} alt="" />
                <div className="text2">YOU WERE MADE TO</div>
                <div className='text3'>MAKE AN IMPACT</div>
                <div className="text4">
                  <Button variant="light" style={{borderRadius: 100}}><span style={{fontSize: 15, fontWeight: 700, paddingLeft: 20, paddingRight: 20}}>SHOP PENS</span></Button>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
                <img src={img3} alt="" />
                <div className="text5">MADE FOR THE BEST</div>
                <div className='text6'>CHANGE MAKERS</div>
                <div className="text7">
                  <Button variant='dark' style={{borderRadius: 100}}><span style={{fontSize: 15, fontWeight: 700, paddingLeft: 20, paddingRight: 20}}>SHOP BRANDS</span></Button>
                </div>
            </div>
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
              <img src={img4} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
              <img src={img5} alt="" />
            </div>
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style last-image">    
                <img src={img6} alt="" />
                <div className="text2">SAVOUR THE PRESENT</div>
                <div className="text8">
                  <Button variant="light" style={{borderRadius: 100}}><span style={{fontSize: 15, fontWeight: 700, paddingLeft: 20, paddingRight: 20}}>SHOP PENS</span></Button>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="column-style fluid">
            <div className="container column-style">
                <img className="last-image" src={img7} alt="" />
                <div className="text9">WHERE QUALITY MEETS CLASS</div>
                <div class="estrellas inverso text10">
                  <span>U</span>
                  <span>O</span>
                  <span>Y</span>
                  <span> </span>
                  <span>R</span>
                  <span>O</span>
                  <span>F</span>
                  <span> </span>
                  <span>E</span>
                  <span>D</span>
                  <span>A</span>
                  <span>M</span>
                </div>
                <div className='text11'>PISTONS</div>
                <div className="text8">
                  <Button variant="light" style={{borderRadius: 100}}><span style={{fontSize: 15, fontWeight: 700, paddingLeft: 20, paddingRight: 20}}>SHOP THE FALL 2023 COLLECTION</span></Button>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Front;
