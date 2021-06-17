import { useTranslation } from "next-i18next";
import { Footer } from "../components";
import NewsletterContainer from "./newsletter";

export default function FooterContainer({ showNewsletter = true }) {
  const { t } = useTranslation("common");

  return (
    <>
      <Footer>
        <Footer.Content>
          <Footer.Group>
            <Footer.Bar />
            <Footer.TextGroup>
              <Footer.Links>
                <Footer.TextLink href="https://www.linkedin.com/in/nestorlopezlopez/">
                  LinkedIn
                </Footer.TextLink>
                <Footer.TextLink href="https://www.github.com/Nsttt/">
                  Github
                </Footer.TextLink>
                <Footer.TextLink href="https://www.twitter.com/nstlopez/">
                  Twitter
                </Footer.TextLink>
              </Footer.Links>
              <Footer.Links>
                <Footer.TextLink href="https://www.instagram.com/nstlopez">
                  Instagram
                </Footer.TextLink>
                <Footer.TextLink href="https://dev.to/nstlopez">
                  Dev.to
                </Footer.TextLink>
              </Footer.Links>
              <Footer.Contact href="/contact">
                {t("footer_button")}
              </Footer.Contact>
            </Footer.TextGroup>
            <Footer.Bar />
          </Footer.Group>
        </Footer.Content>
        <Footer.Copyright>
          Copyright {new Date().getFullYear()}. {t("footer_copyright")}
        </Footer.Copyright>
      </Footer>
    </>
  );
}
