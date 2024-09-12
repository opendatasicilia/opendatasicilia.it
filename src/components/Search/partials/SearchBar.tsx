import React, { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchBar = ({ query, setQuery }: SearchBarProps) => (
  <input
    id="input"
    className="search-bar border rounded-3"
    autoComplete="false"
    checked={true}
    placeholder="Cerca..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);
