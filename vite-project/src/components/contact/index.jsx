import { useState } from "react";

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value; 
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "userName") {
        setUserName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!email || !userName || !message) {
        setErrorMessage("Please fill out all fields.");
        return;
      }
      // Reset the form fields
      setEmail("");
      setUserName("");
      setMessage("");
      setErrorMessage("");
    };
    return (
      <section>
        <h2>Contact Me</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Submit</button>
        </form>
      </section>
    );
}

export default Contact;