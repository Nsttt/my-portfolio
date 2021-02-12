import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_HOST}/graphql`,
  cache: new InMemoryCache(),
});
