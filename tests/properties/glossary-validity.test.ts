import { describe, it, expect } from "vitest";
import { glossary, resolveGlossaryEntry } from "../../src/data/glossary";

describe("Glossary validity", () => {
  it("has at least one entry", () => {
    expect(Object.keys(glossary).length).toBeGreaterThan(0);
  });

  it("every entry resolves to a non-empty definition", () => {
    for (const [key, entry] of Object.entries(glossary)) {
      const { definition } = resolveGlossaryEntry(entry);
      expect(definition, `glossary key ${key}`).toBeTruthy();
      expect(String(definition).trim().length).toBeGreaterThan(0);
    }
  });
});
