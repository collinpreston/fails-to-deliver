import { useState }  from 'react';
import './Contact.css'
import { Form, Button } from 'react-bootstrap'

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inquiry: {message}, email: {email}})
    };

    function handleChange(e) {
        switch(e.target.name) {
            case "message":
                setMessage(e.target.value);
                return;
            case "email":
                setEmail(e.target.value);
                return;
        }
    }

    function handleSubmit(event){
        setFormSubmitted(true)

        fetch('/api/v1/inquiry', requestOptions)
            .then(response => response.json());
        // TODO, send request to Ruby endpoint that will ultimately send the email
    }

    let form;
    if (formSubmitted) {
        form =
        <div>
            <p><b>Thanks for your inquiry, you will hear from us soon.</b></p>
        </div>
    } else {
        form =
        <div>
            <p><b>Feel free to reach out with any questions or suggestions.</b></p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="name@example.com" onChange={handleChange}/>
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
    }

    return (
        <div id="form">
            <h1>Contact</h1>
            {form}
        </div>
    )
}
export default Contact
