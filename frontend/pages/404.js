import { NextSeo } from "next-seo";
import { Feature } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function PageNotFound() {
  return (
    <>
      <NextSeo title="404" />
      <HeaderContainer>
        <Feature>
          <Feature.NotFound>
            <Feature.Title>404 not found</Feature.Title>
            <Feature.Button href="/">Go Back</Feature.Button>
          </Feature.NotFound>
        </Feature>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
