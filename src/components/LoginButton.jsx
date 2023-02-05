import { Form, InputGroup } from "react-bootstrap"


function LoginButton(){

    function onLoginEnter(event){
        if(event.key === "Enter"){
            let username = event.target.value
            fetch(`http://localhost:3500/getUser?username=${username}`)
            .then((response) => response.json())
            .then((data) => {
        console.log(data.cash);
    })
        }
    }

    return (
        <InputGroup className="mb-3" onKeyDown={onLoginEnter}>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
        />
        </InputGroup>)
}

export default LoginButton