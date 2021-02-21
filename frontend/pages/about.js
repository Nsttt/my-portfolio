import { NextSeo } from "next-seo";
import marked from "marked";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Biography } from "../components";
import { getBiography, getEmail, getPhoto } from "../services/about.service";

export default function About({ email, photo, body }) {
  return (
    <>
      <NextSeo />
      <HeaderContainer>
        <Biography>
          <Biography.Title>Test</Biography.Title>
          <Biography.Body body={body.body} />
        </Biography>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps() {
  const email = await getEmail();
  const photo = await getPhoto();
  const biography = await getBiography();

  const body = marked(biography, {
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_HOST,
  });
  return {
    props: {
      email: { email },
      photo: { photo },
      body: { body },
    },
  };
}
