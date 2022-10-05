import { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import boxes from '../app/assets/img/boxes.png';
import arrow from '../app/assets/img/arrow.png';
import SubHeader from '../components/SubHeader';




const HomePage = () => {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);



    return (
        <Container>
            <SubHeader current='Home' />
            <Row>
                <Col sm='5' md='6' className='mt-5'>
                    <h2>Segun's Portfolio</h2>
                    <p>This is a React Redux Website created By Segun Ajiboye.
                        This website is a visual demostration/samples of a responsive
                        and functioning react application that i have learnt and i have had hands-on experience on.
                        Please feel free to ontact me if you need any information
                    </p>

                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+15716195878'
                    >
                        <Button className='fa fa-phone'> Contact Me</Button>
                    </a>
                    <br />
                    <Col md='9'>
                        <img src={arrow} />
                        <span className='text-primary text-larger'>
                            Talk to Segun today
                        </span>
                    </Col >
                </Col>

                <Col xs='8' md='3' >
                    <img src={boxes}  />
                </Col>
            </Row>
            <Row>
                <Col xs='10' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col >
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>

        </Container>
    );
}
export default HomePage;