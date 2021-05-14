import { useTranslation } from "next-i18next";
import { Footer } from "../components";
import NewsletterContainer from "./newsletter";

export default function FooterContainer() {
  const { t } = useTranslation("common");

  return (
    <Footer>
      <Footer.Container>
        <Footer.Group>
          <Footer.Logo src="/android-chrome-512x512.png" />
          <Footer.FocusWord>
            NST <Footer.Title>Lopez</Footer.Title>
          </Footer.FocusWord>
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
              <Footer.TextLink href="https://discord.com/invite/qDXCrK4">
                Discord
              </Footer.TextLink>
            </Footer.Links>
            <Footer.Links>
              <Footer.TextLink href="https://www.instagram.com/nstlopez">
                Instagram
              </Footer.TextLink>
              <Footer.TextLink href="https://dev.to/nstlopez">
                Dev.to
              </Footer.TextLink>
              <Footer.TextLink href="https://medium.com/@nstlopez">
                Medium
              </Footer.TextLink>
              <Footer.TextLink href="https://hackernoon.com/u/nstlopez">
                Hackernoon
              </Footer.TextLink>
            </Footer.Links>
            <Footer.Contact href="/contact">
              {t("footer_button")}
            </Footer.Contact>
          </Footer.TextGroup>
          <Footer.Bar />
        </Footer.Group>
        <NewsletterContainer />
      </Footer.Container>
      <Footer.Copyright>
        Copyright {new Date().getFullYear()}. {t("footer_copyright")}
      </Footer.Copyright>
    </Footer>
  );
}
