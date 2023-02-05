import { Form, InputGroup } from "react-bootstrap"


function LoginButton(){

    function onLoginEnter(event){
        if(event.key === "Enter"){
            let username = event.target.value
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