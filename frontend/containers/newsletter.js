import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Newsletter } from "../components";

export default function NewsletterContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation("common");

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
    setMessage(t("newsletter_success"));
  };

  return (
    <Newsletter>
      <Newsletter.Title>{t("newsletter_title")}</Newsletter.Title>
      {message ? (
        <Newsletter.Success>{message}</Newsletter.Success>
      ) : (
        <>
          <Newsletter.SubTitle>{t("newsletter_subtitle")}</Newsletter.SubTitle>
          <Newsletter.Input
            type="text"
            id="newsletter_name"
            placeholder={t("newsletter_name_input")}
            name="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <Newsletter.Input
            type="email"
            id="newsletter_email"
            placeholder={t("newsletter_email_input")}
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          {!message && (
            <Newsletter.Button onClick={handleSubmit}>
              {t("button")}
            </Newsletter.Button>
          )}
          <Newsletter.SmallText>
            {t("newsletter_bottom_text")}
          </Newsletter.SmallText>
        </>
      )}
    </Newsletter>
  );
}
