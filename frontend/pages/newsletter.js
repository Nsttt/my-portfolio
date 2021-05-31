import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import HeaderContainer from "../containers/header";
import { Newsletter } from "../components";
import FooterContainer from "../containers/footer";

export default function NewsletterPage() {
  const { t } = useTranslation(["newsletter", "common"]);

  return (
    <>
      <NextSeo title="About" />
      <HeaderContainer>
        <Newsletter.PageContainer>
          <Newsletter.PageTitle>{t("title")}</Newsletter.PageTitle>
          <Newsletter.PageSubtitle>{t("subtitle")}</Newsletter.PageSubtitle>
          <Newsletter.PageInput
            type="text"
            id="newsletter_name"
            placeholder={t("common:newsletter_name_input")}
            name="Name"
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            required
          />
          <Newsletter.PageInput
            type="email"
            id="newsletter_email"
            placeholder={t("common:newsletter_email_input")}
            name="Email"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            required
          />
          {/* {!message && ( */}
          <Newsletter.Button>{t("common:newsletter_button")}</Newsletter.Button>
          {/* )} */}
          <Newsletter.SmallText>
            {t("common:newsletter_bottom_text")}
          </Newsletter.SmallText>
        </Newsletter.PageContainer>
      </HeaderContainer>
      <FooterContainer showNewsletter={false} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["newsletter", "common"])),
    },
  };
}
