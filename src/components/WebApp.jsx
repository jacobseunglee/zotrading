import { useState } from "react";
import BuySellButton from "./BuySellButton";
import Header from "./Header"
import DisplayGraph from "./displayGraph";
import DisplayPrice from "./DisplayPrice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WebApp() {
    const [data, setData] = useState([
        { index: '0', value: 30 },
        { index: '1', value: 10 },
        { index: '2', value: 50 },
        { index: '3', value: 20 },
        { index: '4', value: 80 },
        { index: '5', value: 30 },
        { index: '6', value: 0 },
        { index: '7', value: 20 },
        { index: '8', value: 300 },
        { index: '9', value: 55 },
        { index: '10', value: 60 },
        { index: '11', value: 80 },
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
        <div className="display-price">
          <DisplayPrice data={data}/>
        </div>
        <div className="buy-sell-container">
            <BuySellButton data={data} setData={setData}/>
        </div>
      </Row>
    </Container>
    </div>
    )
}

export default WebApp