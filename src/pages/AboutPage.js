import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
    return (    
        <Container>
            <SubHeader current='About us' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                        This is a React Redux Website created By Segun Ajiboye.
                        This website Contains some of the tools to create a responsive
                        and functioning react application that i have learnt and have hands-on experince in.
                        Contact me if you need any information. You can try Some of the feature in this website.
                        For example, leave a comment at the directory page by clicking on any of the image card. 
                        your comment will appear temporarily.
                        it is so exciting to work with react to build an application.
                        All the names used in this Website are not real just for portfolio purposes. Looking forward to my next portfolio
                        using 'REACT NATIVE'
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>At Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Created</dt>
                                <dd className='col-6'>September 24, 2022</dd>
                                <dt className='col-6'>Language Used</dt>
                                <dd className='col-6'>React JS</dd>
                                <dt className='col-6'>Endorsement Given</dt>
                                <dd className='col-6'>3</dd>
                                <dt className='col-6'>Goal</dt>
                                <dd className='col-6'>Full Stack Developer</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>People are the greatest resources try not
                                    to loose that but do not let toxic one stay in your life.
                                    Let them intoxicate themselves till they realize.
                                </p>
                                <footer className='blockquote-footer'>
                                Segun Ajiboye,{' '}
                                    <cite title='Source Title'>
                                        "Company" - Choose a good Comapny,
                                        2020
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Our Endorsement</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    )
}
export default AboutPage;