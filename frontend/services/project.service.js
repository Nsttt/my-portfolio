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
            heroproject
            image {
              url
            }
          }
        }
      `,
    })
    .then((result) => result.data.projects);
}

export async function getByPermaLink(permalink) {
  return apolloClient
    .query({
      query: gql`
        {
          projectByPermaLink(permalink: "${permalink}") {
            title
            subtitle
            body
            link
            git
            image {
              url
            }
            categories {
              name
              icon {
                url
              }
            }
          }
        }
      `,
    })
    .then((result) => result.data.projectByPermaLink);
}

export async function getHeroProject() {
  return apolloClient
    .query({
      query: gql`
        {
          projects(where: { heroproject: true }) {
            title
            description
            image {
              url
            }
          }
        }
      `,
    })
    .then((result) => result.data.projects);
}

export async function getGallery() {
  return apolloClient
    .query({
      query: gql`
        {
          projects(limit: 3) {
            id
            permalink
            image {
              url
            }
          }
        }
      `,
    })
    .then((result) => result.data.projects);
}
