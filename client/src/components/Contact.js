import { useState }  from 'react';
import './Contact.css'
import { Form, Button } from 'react-bootstrap'

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleChange(e) {
        switch(e.target.name) {
            case "message":
                setEmail(e.target.value)
            case "email":
                setMessage(e.target.value)
        }
    }
    function handleSubmit(event){
        // TODO, send request to Ruby endpoint that will ultimately send the email
    }
    return (
        <div id="form">
            <h1>Contact</h1>
            <p><b>Feel free to reach out with any questions or suggestions.</b></p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Inquiry</Form.Label>
                    <Form.Control name="message" as="textarea" rows={3}  onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Contact
