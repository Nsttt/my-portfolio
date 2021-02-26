import { useState } from "react";
import { Newsletter } from "../components";
import createNewsletter from "../services/newsletter.service";

export default function NewsletterContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    createNewsletter(name, email);
  };

  return (
    <Newsletter>
      <Newsletter.Title>Subscribe to the newsletter.</Newsletter.Title>
      <Newsletter.SubTitle>
        I won't send you spam, I promise.
      </Newsletter.SubTitle>
      <Newsletter.Input
        type="text"
        id="name"
        placeholder="Your name"
        name="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <Newsletter.Input
        type="email"
        id="email"
        placeholder="your@mail.com"
        name="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <Newsletter.Button onClick={handleSubmit}>Send</Newsletter.Button>
      <Newsletter.SmallText>
        You can unsubscribe at any time.
      </Newsletter.SmallText>
    </Newsletter>
  );
}
