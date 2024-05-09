import { expect, test } from "vitest";
import getImageIndex from "./src/SignInSide";

test("randomly generates a image index within the length of the background images list", () => {
  expect(getImageIndex()).toBe(1);
});
