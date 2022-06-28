import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
 uri: 'https://api-sa-east-1.graphcms.com/v2/cl4w09hg722dq01uiakdr4q8z/master',
 cache: new InMemoryCache()
})