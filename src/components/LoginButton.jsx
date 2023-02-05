import { Form, InputGroup } from "react-bootstrap"


function LoginButton(props){

    const {user, setUser} = props

    function onLoginEnter(event){
        if(event.key === "Enter"){
            let username = event.target.value
            fetch(`http://localhost:3500/getUser?username=${username}`)
            .then((response) => response.json())
            .then((data) => {
            setUser(data);
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