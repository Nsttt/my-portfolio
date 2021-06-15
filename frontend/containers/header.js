import { useTranslation } from "next-i18next";
import { Header } from "../components";

export default function HeaderContainer({ children }) {
  const { t } = useTranslation("common");

  return (
    <Header>
      <Header.Group>
        <Header.Logo src="/android-chrome-192x192.png" />
        <Header.Title />
        <Header.TextLink href="/">{t("header_home")}</Header.TextLink>
        <Header.TextLink href="/portfolio">
          {t("header_portfolio")}
        </Header.TextLink>
        <Header.TextLink href="/about">{t("header_about")}</Header.TextLink>
        <Header.TextLink href="/contact">{t("header_contact")}</Header.TextLink>
      </Header.Group>
      <Header.Group>
        <Header.SocialIcon
          alt="LinkedIn"
          src="/linkedin.svg"
          href="https://www.linkedin.com/in/nestorlopezlopez/"
        />
        <Header.SocialIcon
          alt="Github"
          src="/github.svg"
          href="https://github.com/Nsttt/"
        />
        <Header.SocialIcon
          alt="Twitter"
          src="/twitter.svg"
          href="https://twitter.com/nstlopez/"
        />
      </Header.Group>
    </Header>
  );
}
