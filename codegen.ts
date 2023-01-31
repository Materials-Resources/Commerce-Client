import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "http://127.0.0.1:4000/": {
        method: 'POST',
      }
    }
  ],
  documents: ["pages/**/*.tsx"],
  ignoreNoDocuments: false,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: ['typescript', 'typescript-resolvers'],
      config: { federation: true }
    },
  },
};

export default config;
