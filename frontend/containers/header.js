import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo src="/android-chrome-192x192.png" />
          <Header.Title>NST Lopez</Header.Title>
          <Header.TextLink href="/">Home</Header.TextLink>
          <Header.TextLink href="/portfolio">Portfolio</Header.TextLink>
          <Header.TextLink href="/about">About</Header.TextLink>
          <Header.TextLink href="/contact">Contact</Header.TextLink>
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
      </Header.Frame>
      {children}
    </Header>
  );
}
