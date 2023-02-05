

function DisplayPrice(props){
    const { data } = props;
    let price = data[data.length - 1].value
    return (
        <div>${price}</div>
    )
}

export default DisplayPrice