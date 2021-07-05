import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Content>
          <Footer.Group>
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
                <Footer.TextLink href="https://www.instagram.com/nstlopez">
                  Instagram
                </Footer.TextLink>
                <Footer.TextLink href="https://dev.to/nstlopez">
                  Dev.to
                </Footer.TextLink>
                <Footer.TextLink href="https://discord.gg/">
                  Discord
                </Footer.TextLink>
              </Footer.Links>
            </Footer.TextGroup>
          </Footer.Group>
        </Footer.Content>
      </Footer>
    </>
  );
}
