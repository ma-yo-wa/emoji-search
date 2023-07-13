import { createContext, useState, useEffect } from "react";
export const EmojiContext = createContext<EmojiContext>({} as any);

interface Props {
  children: JSX.Element;
}

interface Emoji {
  htmlCode: string;
  name: string;
}

interface EmojiContext {
  emojis: Emoji[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  hasError: boolean;
}

export const EmojiContextProvider = (props: Props) => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchEmoji = () => {
      fetch("https://emojihub.yurace.pro/api/all")
        .then((response) => response.json())
        .then((result: Emoji[]) => setEmojis(result))
        .catch((error) => {
          console.error(error);
          setHasError(true);
        });
    };

    fetchEmoji();
  }, []);

  return (
    <EmojiContext.Provider
      value={{ emojis: emojis, searchTerm, setSearchTerm, hasError }}
    >
      {props.children}
    </EmojiContext.Provider>
  );
};
