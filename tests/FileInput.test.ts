import FileUpload from "../components/FileUpload.vue";
import { render } from "@testing-library/vue";
import { setup } from "@nuxt/test-utils-edge";

describe("Please work", async () => {
  await setup({});
  it("pretty please", () => {
    const {} = render(FileUpload);
    assert(true);
  });
});
