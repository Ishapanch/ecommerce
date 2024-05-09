import React , {useState} from 'react'
import video1 from '../../assets/images/home/outdoor-vid.mp4'
import img1 from '../../assets/images/home/outdoor-img.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import limited from  '../../assets/images/home/limited.jpeg'
import '../home/Limited.css'
import { FaPlay, FaPause } from "react-icons/fa";

export default function ShopOutdoor() {

  const [isAutoplay,setAutoplay] = useState(true);
  const [isLoop,setLoop] = useState(true)

  const pauseplay = () =>{
    setAutoplay(!isAutoplay);
    setLoop(!isLoop)
  }
  return (
    <div className="outdoor-sec">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="lg-heaing">MANIFESTING SUMMER</h2>
          </Col>
          <Col lg={7} className='pl-0'>
            <div className="video-sec">
              <video className="w-100" autoPlay={isAutoplay} loop={isLoop}>
                <source src={video1} type="video/mp4" />
              </video>
              <div className="play-btn">
                <button onClick={pauseplay}>
                  {isAutoplay ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <h3>SHOP OUTDOOR DECOR</h3>
            </div>
          </Col>
          <Col lg={5} className='pr-0 align-content-center'>
            <div className="img-sec">
              <img src={img1} className='w-100'/>
              <h3>SHOP OUTDOOR DINING</h3>
            </div>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}
