import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Container>
        <Footer.TextLink href="https://www.linkedin.com/in/nestorlopezlopez/">
          Linkedin
        </Footer.TextLink>
        <Footer.TextLink href="https://github.com/nsttt">
          Github
        </Footer.TextLink>
        <Footer.TextLink href="https://instagram.com/nstlopez">
          Instagram
        </Footer.TextLink>
        <Footer.TextLink href="https://twitter.com/nstlopez">
          Twitter
        </Footer.TextLink>
        <Footer.TextLink href="https://discord.com/invite/qDXCrK4">
          Discord
        </Footer.TextLink>
        <Footer.Button href="/contact">Say hi 👋</Footer.Button>
      </Footer.Container>
    </Footer>
  );
}
