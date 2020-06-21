import React, { useState, useRef } from "react";
import PostCreateCardHeader from "./PostCreateCardHeader";
import { postApi } from "../API";
import { NavLink } from "react-router-dom";

function PostCreateCard() {
    const [newPost, setNewPost] = useState("");
    const newPostInput = useRef();

    async function onPostButton() {
        await postApi.postPost({ id: 0, content: newPost });
    }

    return (
        <div className="PostCreateCard__container">
            <PostCreateCardHeader />

            <input
                className="PostCreateCard__input"
                placeholder="Новый пост..."
                ref={newPostInput}
                onChange={() => setNewPost(newPostInput.current.value)}
                value={newPost}
            />
            <NavLink onClick={onPostButton} className="button" to={"/"}>
                Добавить
            </NavLink>
        </div>
    );
}

export default PostCreateCard;
