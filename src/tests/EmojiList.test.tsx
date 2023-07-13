import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EmojiList from "../EmojiList";

describe("EmojiList", () => {
  it("expects EmojiList component to be rendered", () => {
    render(<EmojiList />);
    expect(screen.getByText("Emoji Search")).toBeInTheDocument();
  });
});
