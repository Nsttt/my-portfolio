import { gql } from "@apollo/client";
import apolloClient from "./apolloClient.service";

export default async function createNewsletter(name, email) {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation {
          createNewsletterMail(
            input: { data: { name: "${name}", mail: "${email}" } }
          ) {
            newsletterMail {
              name
              mail
            }
          }
        }
      `,
    })
    .then(() => "Success");
}
