import { useState } from "react";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";

export default function Contact() {
  const { t } = useTranslation("contact");

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
      <HeaderContainer />
      <Form>
        <Form.Title>{t("title")}</Form.Title>
        {send ? (
          <Form.Success>{t("success")}</Form.Success>
        ) : (
          <>
            <Form.SubTitle>{t("subtitle")}</Form.SubTitle>
            <Form.Input
              type="text"
              id="name"
              placeholder={t("name_placeholder")}
              name="Name"
              onChange={handleChange}
              value={inputs.name}
              required
            />
            <Form.Input
              type="email"
              id="email"
              placeholder={t("email_placeholder")}
              name="Email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
            <Form.Body
              type="text"
              id="message"
              placeholder={t("body_placeholder")}
              name="Message"
              onChange={handleChange}
              value={inputs.message}
              required
            />
            <Form.Button onClick={handleSubmit}> {t("button")}</Form.Button>
          </>
        )}
      </Form>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "common"])),
    },
  };
}
