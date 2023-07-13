import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EmojiList from "../EmojiList";
import { EmojiContextProvider } from "../EmojiContextProvider";

describe("EmojiList", () => {
  it("expects EmojiList component to be rendered", () => {
    render(<EmojiList />);
    expect(screen.getByText("Emoji Search")).toBeInTheDocument();
  });

  it("shows the correct emoji when a user searches with the appropriate search term", async () => {
    render(
      <EmojiContextProvider>
        <EmojiList />
      </EmojiContextProvider>
    );
    const input = screen.getByLabelText("Emoji Search");
    fireEvent.change(input, { target: { value: "laugh" } });
    await waitFor(() => expect(screen.getByText("🤣")).toBeInTheDocument());
  });
});
