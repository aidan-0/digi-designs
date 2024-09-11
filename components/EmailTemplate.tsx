import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>New Digi Designs Form Submission</h1>
    <p>Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);