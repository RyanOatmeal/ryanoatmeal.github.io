import { world } from "./index";

test("Bob returns steven", () => {
  expect(world({ state: {}, input: "bob" }).output).toBe("Steven");
});
