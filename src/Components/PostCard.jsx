import React, { useState, useEffect } from "react";
import PostView from "./PostView";

function PostCard(props) {
    const [currentPost, setCurrentPost] = useState({});
    const id = Number(props.match.match.params.postId);


    useEffect(() => {
        !currentPost.length && setCurrentPost(props.posts.filter((p) => p.id === id)[0] || {});
    }, [props]);

    return (
        <PostView id={currentPost.id} created={currentPost.created} getPostsFromServer={props.getPostsFromServer}>{currentPost.content}</PostView>
    );
}

export default PostCard;
