import { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { sendContactMail } from "./mail-api";

class Contact extends Component {
  state = {
    formButtonDisabled: false,
    formButtonText: "Send",
    name: "",
    mail: "",
    formContent: "",
  };

  render() {
    const {
      formButtonText,
      formButtonDisabled,
      name,
      mail,
      formContent,
    } = this.state;
    const btnClass = formButtonDisabled ? "disabled" : "";

    return (
      <div>
        <div className="grid">
          <div className="col-8">
            <h2>Send me a mail !</h2>
            <p>I usually respond in about 48h.</p>
          </div>
        </div>
        <div className="grid">
          <div className="col-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="fname"
              onChange={this.onNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="email"
              placeholder="E-Mail"
              value={mail}
              name="email"
              onChange={this.onMailChange}
            />
          </div>
        </div>
        <div className="grid">
          <div className="col-8">
            <TextareaAutosize
              name="text"
              placeholder="Message"
              value={formContent}
              onChange={this.onFormContentChange}
              style={{
                minHeight: "48px",
                width: "100%",
                border: "none",
                borderRadius: "0px",
                margin: "8px 0px",
                resize: "none",
                padding: "0px",
                paddingBottom: "14px",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            />
          </div>
          <div className="col-8">
            <button
              className={btnClass}
              type="submit"
              onClick={this.submitContactForm}
              disabled={formButtonDisabled}
            >
              {formButtonText}
            </button>
          </div>
        </div>
        <style jsx>{`
          .grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 800px;
            margin-right: auto;
            margin-left: auto;
            padding-left: 12px;
            padding-right: 12px;
          }

          .col-4,
          .col-8 {
            padding: 8px 12px;
            box-sizing: border-box;
          }
          .col-4 {
            flex-basis: 50%;
            max-width: 50%;
          }
          .col-8 {
            flex-basis: 100%;
            max-width: 100%;
          }
          @media only screen and (max-width: 768px) {
            .grid {
              flex-direction: column;
              padding-left: 0px;
              padding-right: 0px;
            }
            .col-4,
            .col-8 {
              padding-left: 24px;
              padding-right: 24px;
              flex-basis: 100%;
              max-width: 100%;
            }
          }
          input[type="text"],
          input[type="email"] {
            height: 48px;
            width: 100%;
            border: none;
            border-radius: 0px;
            border-bottom: 1px solid #121212;
            margin: 8px 0px;
            box-shadow: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            padding: 0px;
            outline: none;
          }

          ::placeholder {
            color: #c8cbce;
          }

          ::-ms-input-placeholder {
            color: #c8cbce;
          }

          button {
            padding: 0px 24px;
            height: 48px;
            background-color: #5390d9;
            margin: 16px 0px;
            border: none;
            border-radius: 0px;
            cursor: pointer;
            color: #fff;
          }

          .disabled {
            background-color: #fff;
            color: #121212;
            cursor: auto;
            padding-left: 0px;
          }
        `}</style>
      </div>
    );
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onMailChange = (event) => {
    this.setState({ mail: event.target.value });
  };

  onFormContentChange = (event) => {
    this.setState({ formContent: event.target.value });
  };

  submitContactForm = async (event) => {
    event.preventDefault();
    const recipientMail = "nestor@nstlopez.com";
    const { name, mail, formContent } = this.state;
    const res = await sendContactMail(recipientMail, name, mail, formContent);
    if (res.status < 300) {
      this.setState({
        formButtonDisabled: true,
        formButtonText: "Thanks for your message",
        name: "",
        mail: "",
        formContent: "",
      });
    } else {
      this.setState({ formButtonText: "Please fill out all fields." });
    }
  };
}

export default Contact;
