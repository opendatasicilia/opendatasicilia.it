import React from "react";

import { useState, useEffect, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { renderToString } from "react-dom/server";
import { truncateStringToWord } from "@utils/helpers";

interface UseSearchProps {
  isSearching?: boolean;
}

export const useSearch = ({ isSearching }: UseSearchProps) => {
  const [query, setQuery] = useState("");
  const data = useStaticQuery(graphql`
    query {
      localSearchPosts {
        index
        store
      }
    }
  `);

  const results = useFlexSearch(
    query,
    data.localSearchPosts.index,
    data.localSearchPosts.store
  );

  useEffect(() => {
    if (isSearching) {
      document.getElementById("input")!.focus();
    } else {
      setQuery("");
    }
  }, [isSearching]);

  useEffect(() => {
    const overlay = document.getElementById("overlay");
    if (overlay) {
      overlay.classList.toggle("d-block", query.length >= 1);
    }
  }, [query]);

  const highlightText = useCallback(
    (text: string, length = 96) => {
      const regex = new RegExp(
        `\\b(${query.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase()})\\b`
      );
      const matchedRegex = text.toLowerCase().match(regex);

      if (matchedRegex?.length) {
        const actualQuery = text.substr(matchedRegex.index!, query.length);
        const actualRegex = new RegExp(`\\b(${actualQuery})\\b`);
        const excerptEnd = truncateStringToWord(
          text.substr(matchedRegex.index!),
          length
        );
        const excerptStart = truncateStringToWord(
          text.substr(0, matchedRegex.index!).split("").reverse().join(""),
          length
        );
        const excerpt = `${excerptStart
          .split("")
          .reverse()
          .join("")}${excerptEnd}`;

        const highlightedQuery = renderToString(
          <span className="evidenzia">{actualQuery}</span>
        );
        return excerpt.replace(actualRegex, highlightedQuery);
      }
      return truncateStringToWord(text, length);
    },
    [query]
  );

  return {
    query,
    setQuery,
    results,
    highlightText,
  };
};
