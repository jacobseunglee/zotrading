import { Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BuySellButton.css'

function BuySellButton(props){
    const {user, setUser, data} = props;

    function buyStock(){
        fetch(`http://localhost:3500/changeUser?username=${user.id}&cost=-${data[data.length-1].value}&shares=1&stock=Thornton Automobile`)
                .then((response) => response.json())
                .then((data) => {
                setUser(data);})
    }
    
    function sellStock(){
        fetch(`http://localhost:3500/changeUser?username=${user.id}&cost=${data[data.length-1].value}&shares=-1&stock=Thornton Automobile`)
                .then((response) => response.json())
                .then((data) => {
                setUser(data);})
    }
    
    return (
    <div>
        <button className = "but" onClick={buyStock} size="lg">Buy</button>
        <button className = "but" onClick={sellStock} size="lg">Sell</button>
    </div>
         
    )
}

export default BuySellButton