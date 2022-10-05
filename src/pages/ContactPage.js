import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        Trelawney Ln
                        <br />
                        Covington, GA 30016
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+15716195878'
                    >
                        <i className='fa fa-phone' /> (571) 619 5878
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:segceybrosey@gmail.com'
                    >
                        <i className='fa fa-envelope-o' /> segceybrosey@gmail.com
                    </a>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'> 
                <ContactForm /> 
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
