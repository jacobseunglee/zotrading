import { Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BuySellButton(props){
    const {user, setUser, data} = props;

    function buyStock(){
        fetch(`http://localhost:3500/changeUser?username=${user.id}&cost=-${data[data.length-1].value}&shares=1&stock=Thornton Automobile`)
                .then((response) => response.json())
                .then((data) => {
                setUser(data);})
    }
    
    function sellStock(){
        fetch(`http://localhost:3500/changeUser?username=${user.id}&cost=${data[data.length-1].value}&shares=1&stock=Thornton Automobile`)
                .then((response) => response.json())
                .then((data) => {
                setUser(data);})
    }
    
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