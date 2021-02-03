import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo>NST Lopez</Header.Logo>
          <Header.TextLink href="/">Home</Header.TextLink>
          <Header.TextLink href="/portfolio">Portfolio</Header.TextLink>
          <Header.TextLink href="/about">About me</Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.SocialIcon
            alt="LinkedIn"
            src="/linkedin.png"
            href="https://www.linkedin.com/in/nestorlopezlopez/"
          />
          <Header.SocialIcon
            alt="Github"
            src="/github.png"
            href="https://github.com/Nsttt/"
          />
          <Header.SocialIcon
            alt="Twitter"
            src="/twitter.png"
            href="https://twitter.com/nstlopez/"
          />
        </Header.Group>
      </Header.Frame>
      {children}
    </Header>
  );
}
