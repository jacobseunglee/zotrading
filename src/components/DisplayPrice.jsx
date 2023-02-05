

function DisplayPrice(props){
    const { data } = props;
    let price = data[data.length - 1].value
    let stockName = "placeholder"
    // let shares = data[stockName]
    return (
        <div>
            <div>${price}</div>
            <div>shares remaining</div>
        </div>
    )
}

export default DisplayPrice