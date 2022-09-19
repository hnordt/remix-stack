import * as build from "@remix-run/dev/server-build"
import { createRequestHandler } from "@remix-run/vercel"

const requestHandler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
})

export default requestHandler
