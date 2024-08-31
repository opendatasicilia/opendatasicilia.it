import React from "react";
import { useSearch } from "@hooks";
import { SearchResults } from "./partials/SearchResults";
import { SearchBar } from "./partials/SearchBar";

interface SearchProps {
  isSearching?: boolean;
}

export const Search = ({ isSearching }: SearchProps) => {
  const { query, setQuery, results, highlightText } = useSearch({
    isSearching,
  });

  return (
    <div className="position-relative w-100 z-index-2">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults results={results} highlightText={highlightText} />
    </div>
  );
};
