import React, {useState, useCallback} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import truncateStringToWord from "./functions/truncateStringToWord";
import { renderToString } from "react-dom/server";

export default function Search(){
    const [query, setQuery] = useState('')
    const data = useStaticQuery(graphql`
        query {
            localSearchPosts {
                index
                store
            }
        }
    `)
    const results = useFlexSearch(query, data.localSearchPosts.index, data.localSearchPosts.store)

    const highlightText = useCallback((text, length = 120) => {
        // makes it lowercase to be sure to find it
        const regex = new RegExp(`\\b(${query.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase()})\\b`);
        const matchedRegex = text.toLowerCase().match(regex);

        if (matchedRegex?.length) {
            // now let's create a regex using the actual word found, capital-sensitive
            const actualQuery = text.substr(matchedRegex.index, query.length);
            const actualRegex = new RegExp(`\\b(${actualQuery})\\b`);

            // boundaries the excerpt
            const excerptEnd = truncateStringToWord(
                text.substr(matchedRegex.index),
                length
            );
            const excerptStart = truncateStringToWord(
                text.substr(0, matchedRegex.index).split('').reverse().join(''),
                length
            );
            const excerpt = `${excerptStart.split('').reverse().join('')}${excerptEnd}`;

            const highlightedQuery = renderToString(
                <span className="evidenzia">
                    {actualQuery}
                </span>
            );
            return excerpt.replace(actualRegex, highlightedQuery);
        }

        return truncateStringToWord(text, length);
    }, [query]);

    return(
        <div style={{position:'relative', width:'100%'}}>
                <input
                    style={results.length > 0 ? {borderRadius:'10px 10px 0px 0px', borderBottom:'none', height:'54px'} : {borderRadius:'10px', display:'flex', height:'54px'}}
                    className="p-2 border w-100"
                    placeholder="Cerca"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
            <div className="search-results">
            {
                results.length > 0 && 
                    <div className="p-2 text-end text-white" style={{backgroundColor:'rgb(0 164 127)'}}>
                        {results.length} risultati trovati
                    </div>
            }
            {
                results.map((result, i) => (
                    <div className="p-2 border" key={i}>
                        <a href={`../blog/${result.slug}`}>
                            <h6 style={{color:'rgb(0 164 127)'}} className="mb-0 fw-bold" dangerouslySetInnerHTML={{ __html: highlightText(result.title)}} />
                        </a>
                        <div>
                            <small>
                                Pubblicato da: <b dangerouslySetInnerHTML={{ __html: highlightText(result.author)}} />
                            </small>
                        <hr/>
                        </div>
                        <div className="small mt-2 mb-1" dangerouslySetInnerHTML={{ __html: highlightText(result.content) }} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}