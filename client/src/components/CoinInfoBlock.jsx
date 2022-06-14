import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let colorOfChangeCss = [];
var x = 10

const CoinInfoBlock = ({
    base,
    price,
    volume,
    change
}) => {
    return (
        <Col className="w-100 coinInfoBlock mx-3 my-2">
            <div className="title">{base}</div>
            <div className="colorOfPrice">${price}</div>
            <Row>
                <Col>
                    <div className="colorOfNormalText">volume:</div>
                    <div className="colorOfVolumeVal">{volume}</div>
                </Col>
                <Col>
                    <div className="colorOfNormalText">change:</div>
                    <div className={change > 0 ? "colorOfChangeGreen" : "colorOfChangeRed"}>{change}</div>
                </Col>
            </Row>
        </Col>
    )
}

export default CoinInfoBlock;
