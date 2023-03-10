import { useState } from "react";
import BuySellButton from "./BuySellButton";
import Header from "./Header"
import DisplayGraph from "./displayGraph";
import DisplayPrice from "./DisplayPrice";
import LoginButton from "./LoginButton";
import DisplayCash from "./DisplayCash";
import DisplayCurrentShares from "./DisplayCurrentShares";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WebApp() {
    const [data, setData] = useState([
        { index: 0, value: 30 },
        { index: 1, value: 10 },
        { index: 2, value: 50 },
        { index: 3, value: 20 },
        { index: 4, value: 80 },
        { index: 5, value: 30 },
        { index: 6, value: 30 },
        { index: 7, value: 10 },
        { index: 8, value: 50 },
        { index: 9, value: 20 },
        { index: 10, value: 80 },
        { index: 11, value: 30 },
        { index: 12, value: 90},
        { index: 13, value: 30 },
        { index: 14, value: 30 },
        { index: 15, value: 10 },
        { index: 16, value: 50 },
      ])
    const [user, setUser] = useState({cash: 0});
    return (
        <div className="web-app-container">
            <div className="header">
                <Header />
            </div>
        <Container fluid>
          <Row>
            <div className="login-button">
              <LoginButton user={user} setUser={setUser}/>
            </div>
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
        <div className="shares-remaining">
          <DisplayCurrentShares user={user}/>
        </div>
        <div className="display-cash">
          <DisplayCash user={user}/>
        </div>
        <div className="buy-sell-container">
            <BuySellButton user={user} setUser={setUser} data={data}/>
        </div>
      </Row>
    </Container>
    </div>
    )
}

export default WebApp