import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.png'
import about3 from '../../images/about3.png'
import about4 from '../../images/about4.png'
import './about.css'

function About() {
  return (
    <div>
      <Container fluid="md" className='container-style'>
        <Row>
          <Col xs={12} md={6} className="column-style">
            <div className="container column-style">
                <Carousel variant='dark'>
                <Carousel.Item>
                    <img className='img-style'src={about1} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-style'src={about2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-style'src={about3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-style'src={about4} alt="" />
                </Carousel.Item>
                
                </Carousel>
            </div>
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
                <div className='text1'>ABOUT PISTONS</div>
                <div className='text2'>Established in 1897, our beloved fountain pen haven, 'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
