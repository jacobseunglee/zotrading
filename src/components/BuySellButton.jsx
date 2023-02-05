import { Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function buyStock(){
    console.log("stock bought")
}

function sellStock(){
    console.log("stock sold")
}

function BuySellButton(props){
    const {data, setData} = props;
    return (
        <Container>
            <Row>
            <Col/>
            <Col/>
            <Col/>
            <Col/>
            <Col>
            <Button onClick={buyStock} size="lg">Buy</Button>
            <Button onClick={sellStock} size="lg">Sell</Button> </Col>
            </Row>
            <Row></Row>
     
  
        </Container>    
    )
}

export default BuySellButton