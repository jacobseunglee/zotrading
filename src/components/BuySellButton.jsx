
function buyStock(){
    console.log("stock bought")
}

function sellStock(){
    console.log("stock sold")
}

function BuySellButton(){
    console.log("buy sell")
    return (
        <div>
            <button onClick={buyStock}>Buy</button>
            <button onClick={sellStock}>Sell</button>
        </div>
    )
}

export default BuySellButton