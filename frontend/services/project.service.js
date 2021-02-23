import { gql } from "@apollo/client";
import apolloClient from "./apolloClient.service";

export async function getAllProjects() {
  return apolloClient
    .query({
      query: gql`
        {
          projects(sort: "created_at:desc") {
            permalink
            heroproject
            git
            link
            title
            subtitle
            body
            description
            created_at
            id
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
            permalink
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
          projects(sort: "created_at:desc", limit: 3) {
            id
            permalink
            title
            subtitle
            image {
              url
            }
          }
        }
      `,
    })
    .then((result) => result.data.projects);
}
