import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm()
{
      const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Email sent successfully!');
            setFormData({
                firstName: '',
                secondName: '',
                email: '',
                message: ''
            });
        } else {
            alert('Failed to send email.');
        }
    };
      return (
        <Form className="bg-light text-dark p-5 border box-shadow" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                <Form.Label className='w-100 text-start text-capitalize'>
                    First Name
                </Form.Label>
                <Form.Control type="text" value={formData.firstName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="secondName">
                <Form.Label className="w-100 text-start text-capitalize">
                    Second Name
                </Form.Label>
                <Form.Control type="text" value={formData.secondName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label className="w-100 text-start text-capitalize">
                    Email Address
                </Form.Label>
                <Form.Control type="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label className="w-100 text-start text-capitalize">
                    Message
                </Form.Label>
                <Form.Control as="textarea" rows={3} value={formData.message} onChange={handleChange} required />
            </Form.Group>

            <Button variant='primary' type='submit' className="mt-3">Submit</Button>
        </Form>
    );
}

export default ContactForm;