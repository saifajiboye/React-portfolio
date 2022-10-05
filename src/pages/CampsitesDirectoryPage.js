import { Container } from 'reactstrap';
import CampsitesL from '../features/campsites/CampsitesL';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesL />
        </Container>
    );
};

export default CampsitesDirectoryPage;