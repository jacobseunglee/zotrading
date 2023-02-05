

function DisplayCurrentShares(props){

    const {user} = props;

    return (
        <div>
            Wongma Pharm shares: {user["Wongma Pharm"]} <br></br>
            Thornton Automobile shares: {user["Thornton Automobile"]}<br></br>
            Gilman Group Shares: {user["Gilman Group"]}
        </div>
    )
}

export default DisplayCurrentShares