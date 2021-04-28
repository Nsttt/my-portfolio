import { useState } from "react";
import { NextSeo } from "next-seo";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";

export default function Contact() {
  const [state, setState] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [send, setSend] = useState(false);

  const handleRespose = (status, msg) => {
    if (status === 200) {
      setState({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setSend(true);
    } else {
      setState({
        info: { error: true, msg },
      });
    }
  };

  const handleChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setState({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, submitting: true }));
    const res = await fetch("/api/sendMail", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleRespose(res.status, text);
  };

  return (
    <>
      <NextSeo title="Contact" />
      <HeaderContainer>
        <Form>
          <Form.Title>Contact me</Form.Title>
          {send ? (
            <Form.Success>
              Thanks for reaching out. I usually answer within 72 hours ❤️
            </Form.Success>
          ) : (
            <>
              <Form.SubTitle>
                Thanks for taking the time to reach out. How can I help you
                today?
              </Form.SubTitle>
              <Form.Input
                type="text"
                id="name"
                placeholder="Name"
                name="Name"
                onChange={handleChange}
                value={inputs.name}
                required
              />
              <Form.Input
                type="email"
                id="email"
                placeholder="Email"
                name="Email"
                onChange={handleChange}
                value={inputs.email}
                required
              />
              <Form.Body
                type="text"
                id="message"
                placeholder="Message"
                name="Message"
                onChange={handleChange}
                value={inputs.message}
                required
              />
              <Form.Button onClick={handleSubmit}>Submit</Form.Button>
            </>
          )}
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
