import { useContext, useMemo } from "react";
import { EmojiContext } from "./EmojiContextProvider";

const EmojiList = () => {
  const { emojiList, searchTerm, setSearchTerm, hasError } = useContext(EmojiContext);
  const filteredEmoji =
    useMemo(() => {
      if (searchTerm?.length === 0) {
        return [];
      }
      return emojiList?.filter((emoji) =>
        emoji.name.includes(searchTerm.toLowerCase())
      );
    }, [searchTerm, emojiList]) || [];

  return (
    <div className="bg-50 flex flex-col items-center">
      <div className="mb-10">
        <label
          htmlFor="emoji-search"
          className="text-center block mb-4 text-2xl font-medium text-gray-900"
        >
          Emoji Search
        </label>
        <input
          name="emoji-search"
          id="emoji-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:blue-red-100 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-row flex-wrap w-[200px] max-h-[200px] overflow-y-auto overflow-x-auto">
        {filteredEmoji.map((emoji, index) => (
          <div
            className="p-1"
            dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
            key={index}
          ></div>
        ))}
      </div>
      {hasError && <p className="text-red-700">An error occurred while fetching Emojis 🙂. Please, search later.</p>}
    </div>
  );
};

export default EmojiList;
