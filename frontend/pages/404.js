import { Feature } from "../components";
import HeaderContainer from "../containers/header";

export default function PageNotFound() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.NotFound>
            <Feature.Title>404 not found</Feature.Title>
            <Feature.Button>Go Back</Feature.Button>
          </Feature.NotFound>
        </Feature>
      </HeaderContainer>
    </>
  );
}
