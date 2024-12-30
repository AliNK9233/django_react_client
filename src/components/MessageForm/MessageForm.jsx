import React from 'react';

const MessageForm = ({ onSend }) => (
  <form onSubmit={onSend}>
    <textarea placeholder="Your message" name="message" required />
    <button type="submit">Send Message</button>
  </form>
);

export default MessageForm;