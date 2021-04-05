import { Footer } from "../components";
import NewsletterContainer from "./newsletter";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Group>
          <Footer.Logo src="../android-chrome-512x512.png" />
          <Footer.FocusWord>
            NST <Footer.Title>Lopez</Footer.Title>
          </Footer.FocusWord>
        </Footer.Group>
        <Footer.Bar />
        <Footer.Links>
          <Footer.Group>
            <Footer.TextLink>LinkedIn</Footer.TextLink>
            <Footer.TextLink>Github</Footer.TextLink>
            <Footer.TextLink>Twitter</Footer.TextLink>
            <Footer.TextLink>Discord</Footer.TextLink>
          </Footer.Group>
          <Footer.Group>
            <Footer.TextLink>Instagram</Footer.TextLink>
            <Footer.TextLink>Dev.to</Footer.TextLink>
            <Footer.TextLink>Medium</Footer.TextLink>
            <Footer.TextLink>Hackernoon</Footer.TextLink>
          </Footer.Group>
          <Footer.Group>
            <Footer.TextLink>Home</Footer.TextLink>
            <Footer.TextLink>Portfolio</Footer.TextLink>
            <Footer.Project>Project A</Footer.Project>
            <Footer.Project>Project B</Footer.Project>
          </Footer.Group>
          <Footer.Group>
            <Footer.TextLink>About me</Footer.TextLink>
            <Footer.Contact />
          </Footer.Group>
        </Footer.Links>
        <Footer.Bar />
        <Footer.Copyright>
          Copyright {new Date().getFullYear()}. With ❤ from Nestor.
        </Footer.Copyright>
        <NewsletterContainer />
      </Footer.Container>
    </Footer>
  );
}
