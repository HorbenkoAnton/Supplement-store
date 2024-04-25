import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './QuestionsBlock.css'; 

function QuestionsBlock() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            user_email: email,
            message_body: message
        };

       emailjs.send('service_8pam3ma', 'template_l0re9ff', templateParams, '2Mwbu5JzzZDmU12Oh')
            .then(response => {
                console.log('Email successfully sent!', response.status, response.text);
                setEmail('');
                setMessage('');
                alert('Your message has been sent successfully!');
            }, err => {
                console.error('Failed to send the email. Error: ', err);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="questions-block">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{ width: '100%', height: '100px', padding: '10px', marginBottom: '20px' }}
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default QuestionsBlock;
