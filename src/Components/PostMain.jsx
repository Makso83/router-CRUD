import React from "react";
import { Switch, Route } from "react-router-dom";
import PostCreateCard from "./PostCreateCard";
import PostCard from "./PostCard";
import PostWall from "./PostWall";
import { useState } from "react";
import { postApi } from "../API";
import { useEffect } from "react";

function PostMain(props) {
    const [posts, setPosts] = useState([]);

    async function getPostsFromServer() {
        const response = await postApi.getPosts();
        setPosts(response);
    }

    useEffect(() => {
        getPostsFromServer();
    }, []);

    return (
        <div>
            <Switch>
                <Route path="/posts/new" exact component={PostCreateCard} />

                <Route
                    path="/posts/:postId"
                    render={(routeProps) => (
                        <PostCard
                            match={routeProps}
                            posts={posts}
                            getPostsFromServer={getPostsFromServer}
                        />
                    )}
                />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <PostWall
                            posts={posts}
                            getPostsFromServer={getPostsFromServer}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default PostMain;
