import React from "react";
import Select from 'react-select'

export default function Search({data}){
    const posts = data.allWpPost.nodes
    const options = posts.map(post => (
        {
            value: post.slug,
            label: post.title
        }
    ))
    const handleChange = (selectedOption) => {
        if (typeof window !== 'undefined') {
            window.location = `../blog/${selectedOption.value}`;
          }
    };
    return(
        <>
        <Select placeholder="Cerca..." options={options} onChange={handleChange} />
        </>
    )
}