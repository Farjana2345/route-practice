import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const{friendId}=useParams();
    const[friend, setFriend] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[friendId]);
    return (
        <div>
            <h3>this is friend detail {friendId} </h3>
            <h4>Name:{friend.name}</h4>
            <p>Email : {friend.email}</p>
        </div>
    );
};

export default FriendDetail;