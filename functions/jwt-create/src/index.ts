import type {MainHandler} from "@int/types/MainHandler.js";
import { createSigner } from "fast-jwt";

const a = (n: string)  => {
  return 200
}

const handler: MainHandler = (event, context) => {
  const signSync = createSigner({ key: 'secret' })
  const token = signSync({ a: 1, b: 2, c: 3 })


  return {
    statusCode: a("3"),
    body: JSON.stringify({token})
  };
};

export { handler };