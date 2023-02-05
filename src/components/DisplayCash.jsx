

function DisplayCash(props){
    let {user} = props

    return (
        <div>Cash remaining: {user.cash}</div>
    )
}

export default DisplayCash