import React from 'react';

const Author = ({user}) =>
    <div className="row text-center text-lg-start">
        <div className="col-12 col-lg-1">
            <img style={{outline:'#00a47f solid 3px'}} className="rounded-circle" src={user.avatar.url} alt={user.name}/>
        </div>
        <div className="col-12 col-lg-11 pt-3 pt-lg-0">
            <h1>{user.name}</h1>
            <p>{user.description}</p>
        </div>
    </div>

export default Author;