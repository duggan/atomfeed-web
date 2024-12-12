// @ts-check
import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  site: "https://localhost:4322",
  output: "server",
  adapter: deno(),
});
