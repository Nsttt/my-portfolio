import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
      <style jsx>{`
    main {
    font-family:-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
          "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
    padding: 20px 20px 60px;
    max-width: 800px;
    margin: auto;
    font-size: 16px;
    line-height: 1.65;
  }
  form {
    display: grid;
    grid-row-gap: 1em;
  }
  label {
    color: #666666;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
  }
  input,
  button,
  textarea,
  .error,
  .success {
    margin: 0;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    padding: 0.5em;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.2s ease;
    background-color: #fff;
  }
  button,
  .error,
  .success {
    padding: 0.65em 1em;
    background: #0070F3;
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  textarea {
    height: 4em;
    max-width: 800px;
    background-color: #fff;
  }
  input:focus,
  textarea:focus,
  button:focus {
    outline: 0;
    border-color: #0070F3;
  }
  button:hover {
    background: rgba(0, 118, 255, 0.8);
  }
  button:focus {
    box-shadow: 0 0 0 2px rgba(0, 118, 255, 0.5);
  }
  button:disabled {
    pointer-events: none;
    background: #999;
  }
  .error,
  .success {
    background: #ee0000;
    color: #fff;
    margin-top: 16px;
    text-align: center;
  }
  .success {
    background: #7928CA
  }
  @media screen and (max-width: 580px) {
    main {
      font-size: 14px;
      max-width: 350px;
    }
    header {
      height: 9em;
    }
    h2 {
      padding: 0 16px;
    }
  }
  @media screen and (max-width: 474px) {
    main {
      font-size: 12px;
      padding: 12px;
      max-width: 350px;
    }
    h2 {
      padding: 0 8px;
    }
    `}</style>
    </main>
  );
};

export default Contact;
