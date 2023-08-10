import Button from "react-bootstrap/Button";
import "./notification-pop-up.css";
import { useState } from "react";

function NotificationPopUp() {
  const [email, setEmail] = useState("");
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className="newsletter-pop-up">
      <h2>Subscribe to Our Newsletter!</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleInputChange}
        />
        <Button className="btn-danger" variant="danger">Subscribe</Button>
      </form>
    </div>
  );
}
export default NotificationPopUp;
