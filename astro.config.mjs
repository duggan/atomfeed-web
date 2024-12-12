// @ts-check
import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  site: "https://atomfeed-web.deno.dev",
  output: "server",
  adapter: deno(),
});
