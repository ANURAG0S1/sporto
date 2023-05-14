export const ENVIRONMENT = {
  PROD: true,
  DEV: false,
};

export const baseUrl = ENVIRONMENT.PROD
  ? "https://www.anuragkush.me"
  : "127.0.0.1:3001";
