import { Col, Row } from "reactstrap";
import CampsiteC from "./CampsiteC";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesL = () => {
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col xs='10' md='5' className='m-4' key={campsite.id}>
                        <CampsiteC campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesL