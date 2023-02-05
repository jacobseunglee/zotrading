import { Form, InputGroup } from "react-bootstrap"


function LoginButton(){

    function onLoginEnter(event){
        if(event.key === "Enter"){
            let username = event.currentTarget.value
            console.log(event.currentTarget.value)
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