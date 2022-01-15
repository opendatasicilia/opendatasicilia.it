import React, {useState, useEffect, useCallback} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import truncateStringToWord from "./functions/truncateStringToWord";
import { renderToString } from "react-dom/server";

export default function Search({isSearching}){
    const [query, setQuery] = useState('')
    const [suggestion, setSuggestion] = useState('')

    const data = useStaticQuery(graphql`
        query {
            localSearchPosts {
                index
                store
            }
        }
    `)
    const results = useFlexSearch(query, data.localSearchPosts.index, data.localSearchPosts.store)

    useEffect(() => {
        isSearching ? document.getElementById("input").focus() : setQuery('')
    },[isSearching])

    useEffect(() => {
        document.getElementById("overlay").classList.toggle('d-block', query.length >= 1);
    },[query])

    const highlightText = useCallback((text, length = 96) => {
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

    useEffect(() => {
        if(results[0]){
            let a
            var first = results[0].content;
            var match = first && first.toLowerCase().indexOf(query.toLowerCase());
   
            if(match && (match !== -1)){
                a = first.substring(match + query.length).split(" ")[0];
            }
            else{
                setSuggestion('')
                return
            }
            setSuggestion(a)
        }
        if(query.length === 0){
            setSuggestion('')
        }
    },[query,results])

    return(
        <div style={{zIndex:'2'}} className="position-relative w-100">
                <input
                    id="input"
                    autoComplete={false}
                    checked={true}
                    style={{height:'54px',zIndex:'2',textOverflow:'clip'}}
                    className="p-3 border rounded-3 w-100"
                    placeholder="Cerca..."
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="p-3" style={{background:'transparent',position:'absolute', top:'-1px', left:'1px',height:'54px',zIndes:'1'}}>
                    <span style={{color:'transparent'}}>{query}</span>
                    <span style={{color:'lightgray'}}>{suggestion}</span>
                </div>
            {
            results.length > 0 &&
                <div style={{zIndex:'3'}} className="search-results border rounded-3 mt-2"> 
                    <div className="p-3 text-muted bg-light">
                        {results.length} risultati trovati
                    </div>
                    <ul className="list-unstyled">
                    {
                        results.map((result, i) => (
                            <>
                                <div className={`border-bottom ${i === 0 ? 'mx-auto' : 'mx-3'}`} />
                                <a className="text-decoration-none" href={`../blog/${result.slug}`}>
                                    <li className="p-3 border-0 text-black" key={i}>
                                            <h6 className="fw-bold" dangerouslySetInnerHTML={{ __html: highlightText(result.title)}} />
                                            <div>
                                                <small>
                                                    Pubblicato da: <b dangerouslySetInnerHTML={{ __html: highlightText(result.author)}} />
                                                </small>
                                            </div>
                                            <p className="small mt-2 mb-1 text-black" dangerouslySetInnerHTML={{ __html: highlightText(result.content) }} />
                                    </li>
                                </a>
                            </>
                        ))
                    }
                    </ul>
                </div>
            }
        </div>
    )
}