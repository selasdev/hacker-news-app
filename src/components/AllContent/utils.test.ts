import { formatData } from "./utils";
import { data } from "./mocks";

describe("AllContent utils", () => {
  test("formatData should work as intended", () => {
    //@ts-ignore
    const resp = formatData(data);

    expect(resp).toHaveLength(2);
  });
});

export {};
