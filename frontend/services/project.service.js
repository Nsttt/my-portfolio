import { gql } from "@apollo/client";
import apolloClient from "./apolloClient.service";

export async function getAllProjects() {
  return apolloClient
    .query({
      query: gql`
        {
          projects {
            permalink
            title
            body
            description
            created_at
            id
            HeroProject
            Image {
              url
            }
          }
        }
      `,
    })
    .then((result) => result.data.projects);
}

export async function getByPermaLink() {
  return apolloClient
    .query({
      query: gql`
        {
          projectByPermaLink(permalink: "primer-proyecto") {
            title
            body
          }
        }
      `,
    })
    .then((result) => result.data.articleByPermaLink);
}
