import { fileURLToPath } from "node:url";
import { describe, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";

await setup({
  // test context options
  rootDir: fileURLToPath(new URL("../", import.meta.url)),
  server: true,
  browser: true,
});
describe("My test", async () => {
  test("my test", () => {
    // ...
    assert(true);
  });
});
