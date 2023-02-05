

function DisplayCash(props){
    let {user} = props
    console.log(user)

    return (
        <div>Cash remaining: {user.cash}</div>
    )
}

export default DisplayCash