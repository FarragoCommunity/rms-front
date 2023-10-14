
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:  'https://realia23.azurewebsites.net/graphql',
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
