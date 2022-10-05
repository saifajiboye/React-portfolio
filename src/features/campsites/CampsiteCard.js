import { Card, CardImg, CardImgOverlay, CardTitle,  } from "reactstrap";

const CampsiteCard = ({ campsite }) => {
    const { image, name } = campsite;
    return (
        <Card>
            <CardImg 
                src={image}
                alt={name}
                className='photo'

            /> 
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default CampsiteCard;