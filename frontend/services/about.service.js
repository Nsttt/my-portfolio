import { gql } from "@apollo/client";
import apolloClient from "./apolloClient.service";

export async function getBiography() {
  return apolloClient
    .query({
      query: gql`
        {
          biography {
            biography
          }
        }
      `,
    })
    .then((result) => result.data.biography.biography);
}

export async function getPhoto() {
  return apolloClient
    .query({
      query: gql`
        {
          photo {
            photo {
              url
            }
          }
        }
      `,
    })
    .then((result) => result.data.photo.photo);
}

export async function getEmail() {
  return apolloClient
    .query({
      query: gql`
        {
          email {
            email
          }
        }
      `,
    })
    .then((result) => result.data.email.email);
}
