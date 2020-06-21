import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { NavLink } from "react-router-dom";
import ReactLoading from 'react-loading';

function PostWall(props) {
    const [isFetching, setIsFetching] = useState(false);
    const posts = props.posts;
    const getPostsFromServer = props.getPostsFromServer;

    async function postReciever() {
        setIsFetching(true);
        await getPostsFromServer();
        setIsFetching(false);
    }

    useEffect(() => {
        postReciever();
    }, []);
    return (
        <div>
            <div className="PostWall__new-post_container">
                <NavLink className="button" to="/posts/new">
                    Создать пост
                </NavLink>
            </div>
            {isFetching
                ? <ReactLoading className='centered' type='balls' color='#000000' />
                : posts
                      .sort((a, b) => b.created - a.created)
                      .map((post) => (
                          <CardItem
                              key={post.id}
                              id={post.id}
                              content={post.content}
                              created={post.created}
                          />
                      ))}
        </div>
    );
}

export default PostWall;
