import { useState } from "react";
import BuySellButton from "./BuySellButton";
import Header from "./Header"
import DisplayGraph from "./displayGraph";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WebApp() {
    const [data, setData] = useState([
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 10 },
        { name: 'Mar', value: 50 },
        { name: 'Apr', value: 20 },
        { name: 'May', value: 80 },
        { name: 'Jun', value: 30 },
        { name: 'July', value: 0 },
        { name: 'Aug', value: 20 },
        { name: 'Sep', value: 300 },
        { name: 'Oct', value: 55 },
        { name: 'Nov', value: 60 },
        { name: 'Dec', value: 80 },
      ])
    return (
        <div className="web-app-container">
            <div className="header">
                <Header />
            </div>
        <Container fluid>
      <Row>
        <Col>
        <div className="graph-container">
            <DisplayGraph data ={data} />
        </div>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <div className="buy-sell-container">
            <BuySellButton data={data} setData={setData}/>
        </div>
      </Row>
    </Container>
    </div>
    )
}

export default WebApp