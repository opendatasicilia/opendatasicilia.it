import React, { Fragment } from "react";

interface SearchResultsProps {
  results: any[];
  highlightText: (text: string, length?: number) => string;
}

export const SearchResults = ({
  results,
  highlightText,
}: SearchResultsProps) => {
  return results.length > 0 ? (
    <div className="search-results border rounded-3 mt-2 z-index-3">
      <div className="p-3 text-muted bg-light">
        {results.length} risultati trovati
      </div>
      <ul className="list-unstyled">
        {results.map((result, i) => (
          <Fragment key={i}>
            <div className={`border-bottom ${i === 0 ? "mx-auto" : "mx-3"}`} />
            <a
              className="text-decoration-none"
              href={result.uri}
              aria-label={result.title}
              key={i}
            >
              <li className="p-3 border-0 text-black" key={i}>
                <h6
                  className="fw-bold"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(result.title),
                  }}
                />
                <div>
                  <small>
                    Pubblicato da:{" "}
                    <b
                      dangerouslySetInnerHTML={{
                        __html: highlightText(result.author),
                      }}
                    />
                  </small>
                </div>
                <p
                  className="small mt-2 mb-1 text-black"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(result.content),
                  }}
                />
              </li>
            </a>
          </Fragment>
        ))}
      </ul>
    </div>
  ) : null;
};
