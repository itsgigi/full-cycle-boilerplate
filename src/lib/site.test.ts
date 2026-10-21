import { describe, expect, it } from "vitest";
import { absoluteUrl } from "./site";

describe("absoluteUrl", () => {
  it("unisce il percorso all'URL base", () => {
    expect(absoluteUrl("/blog", "https://example.com")).toBe("https://example.com/blog");
  });

  it("restituisce la home se non passi un percorso", () => {
    expect(absoluteUrl(undefined, "https://example.com")).toBe("https://example.com/");
  });

  it("non duplica gli slash", () => {
    expect(absoluteUrl("/chi-siamo", "https://example.com/")).toBe("https://example.com/chi-siamo");
  });
});
