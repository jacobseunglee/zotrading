import { Button} from "react-bootstrap"


function buyStock(){
    console.log("stock bought")
}

function sellStock(){
    console.log("stock sold")
}

function BuySellButton(){
    return (
        <>
            <Button onClick={buyStock} size="lg">Buy</Button>{' '}
            <Button onClick={sellStock} size="lg">Sell</Button>
        </>
    )
}

export default BuySellButton