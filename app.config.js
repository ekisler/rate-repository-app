import "dotenv/config";
export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  extra: {
    env: {
      apolloUri: process.env.APOLLO_URI,
      modeEnv: process.env.MODE_ENV,
    },
    eas: {
      projectId: "3e99ce8f-961c-49ec-8fbb-57ba8f7ab970",
    },
  },
  runtimeVersion: "1.0.0",
  updates: {
    url: "https://u.expo.dev/3e99ce8f-961c-49ec-8fbb-57ba8f7ab970",
  },
  android: {},
  ios: {},
};
