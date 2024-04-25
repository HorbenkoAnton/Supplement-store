import React from 'react';
import './ContactsPage.css'; 

function ContactsPage() {
  return (
    <div>
      <h1>Contact us</h1>
      <div className="contacts-container">
        <section className="contact-block">
          <h2>Phone Numbers</h2>
          <p>+48 123 456 78</p>
          <p>+48 987 654 32</p>
        </section>

        <section className="contact-block">
          <h2>Emails</h2>
          <p><a href="mailto:support@example.com">support@example.com</a></p>
          <p><a href="mailto:info@example.com">info@example.com</a></p>
        </section>
      </div>
    </div>
  );
}

export default ContactsPage;
