const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
  projectByPermaLink(permalink: ID): Projects
  `,
  resolver: {
    Query: {
      projectByPermaLink: {
        resolverOf: "projects.findOne",
        async resolver(_, { permalink }) {
          const entity = await strapi.services.projects.findOne({ permalink });
          return sanitizeEntity(entity, { model: strapi.models.projects });
        },
      },
    },
  },
};
