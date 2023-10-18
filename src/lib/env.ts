import { cleanEnv, str } from "envalid";
export const env = cleanEnv(process.env, {
  PIXEL_API_TOKEN: str(),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
})


