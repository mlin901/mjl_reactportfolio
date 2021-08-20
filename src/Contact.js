import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValidity, setEmailValidity] = useState('');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.match(emailRegex)) {
      alert("Submitted...");
      setEmailValidity('');
    } else {
      setEmailValidity('invalid')
    }
  }

  return ( 
    <div className="contact">
    <h2>Contact</h2>
    <form onSubmit={ handleSubmit }>
      <label>Name:</label>
      <input 
        type="text"
        required
        value={ name }
        onChange={(e) => setName(e.target.value)} 
      />
      <label>Email address:</label>
      <input 
        type = "text"
        required
        value={ email }
        onChange={(e) => {setEmail(e.target.value); setEmailValidity('')}} 
      />
      {emailValidity && <p className="invalid">Email is invalid. Enter a valid email and resubmit.</p> }
      <label>Message:</label>
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
   );
}
 
export default Contact;