import React, {useState, useCallback} from "react";
import {useFlexSearch} from "react-use-flexsearch"
import truncateStringToWord from "./functions/truncateStringToWord";
import { renderToString } from 'react-dom/server';

export default function Search({data}){

    const [query, setInput] = useState('')
    const index = data.localSearchPosts.index
    const store = data.localSearchPosts.store
    const results = useFlexSearch(query, index, store)

    const getExcerpt = useCallback((text, length = 120) => {
        // makes it lowercase to be sure to find it
        const regex = new RegExp(`\\b(${query.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase()})\\b`);
        const matchedRegex = text.toLowerCase().match(regex);

        if (matchedRegex?.length) {
            // now let's create a regex using the actual word found, capital-sensitive
            const actualQuery = text.substr(matchedRegex.index, query.length);
            const actualRegex = new RegExp(`\\b(${actualQuery})\\b`);

            // start of the excerpt
            const excerptEnd = truncateStringToWord(
                text.substr(matchedRegex.index),
                length,
                true
            );

            // yolo let's reverse the string and use the same function for the
            // beginning of the excerpt too
            const excerptStart = truncateStringToWord(
                text.substr(0, matchedRegex.index).split('').reverse().join(''),
                length,
                true
            );

            const excerpt = `${excerptStart.split('').reverse().join('')}${excerptEnd}`;

            const highlightedQuery = renderToString(
                <span className="evidenzia">
                    {actualQuery}
                </span>
            );

            // if nothing was found it means that the query matched
            // a tag or the post title
            return excerpt.replace(actualRegex, highlightedQuery);
        }

        return truncateStringToWord(text, length, true);
    }, [query]);

    return(
        <>
            <input 
                className="searchbar"
                style={(results.length > 0 ? {borderRadius:'8px 8px 0px 0px', borderBottom:'none'} : {borderRadius:'8px'})}
                placeholder="Cerca..."
                value={query} 
                onChange={(e) => setInput(e.target.value)}
            />
            {
                results.length > 0 && 
                    <div style={{backgroundColor:'rgb(0 164 127)',color:'white',padding:'8px',textAlign:'right'}}>
                        {results.length} risultati trovati
                    </div>
            }
            {
                results && results.map((result, i) => (
                    <div style={{border:'1px solid lightgray', padding:'8px', marginBottom:'-1px'}} key={i}>
                        <a href={`../blog/${result.slug}`}>
                            <h6 className="mb-0">{result.title}</h6>
                        </a>
                        <div>
                            <small>
                                Pubblicato da: <b>{result.author}</b>
                            </small>
                        </div>
                        <hr className="m-0"/>
                        <div className="small mt-2 mb-1" dangerouslySetInnerHTML={{ __html: getExcerpt(result.content) }} />
                    </div>
                ))
            }
        </>
    )
}