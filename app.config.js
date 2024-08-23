import "dotenv/config";
export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  extra: {
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
  env: "process.env.REACT_APP_ENV",
};
