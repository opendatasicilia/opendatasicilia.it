import React from 'react';

const Author = ({user}) =>
    <div className="row">
        <div className="col-1">
            <img style={{outline:'#00a47f solid 3px'}} className="rounded-circle" src={user.avatar.url} alt={user.name}/>
        </div>
        <div className="col-11">
            <h1>{user.name}</h1>
            <p>{user.description}</p>
        </div>
    </div>

export default Author;