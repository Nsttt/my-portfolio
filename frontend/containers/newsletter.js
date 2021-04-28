import { useState } from "react";
import { Newsletter } from "../components";

export default function NewsletterContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }
    setEmail("");
    setName("");
    setMessage("Thanks for subscribing ❤️");
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
      {!message && (
        <Newsletter.Button onClick={handleSubmit}>Send</Newsletter.Button>
      )}
      {message ? (
        <Newsletter.Success>{message}</Newsletter.Success>
      ) : (
        <Newsletter.SmallText>
          You can unsubscribe at any time.
        </Newsletter.SmallText>
      )}
    </Newsletter>
  );
}
