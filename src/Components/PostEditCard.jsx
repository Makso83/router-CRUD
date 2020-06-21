import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { postApi } from "../API";
import ReactLoadiing from 'react-loading'

function PostEditCard(props) {
    const [editedPost, setEditedPost] = useState(props.children);
    const [isFetching, setIsFetching] = useState(false);
    const editPostInput = useRef();

    async function onSaveButton() {
        setIsFetching(true);
        await postApi.postPost({ id: props.id, content: editedPost });
        await props.getPostsFromServer();
        props.toggleMode(false);
    }

    return (
        <>
            {isFetching ? (
                <ReactLoadiing
                    className="centered"
                    type="balls"
                    color="#000000"
                />
            ) : (
                <div className="CardItem__card_wrapper">
                    <div className="PostEditCard__header_container">
                        <h4>Редактировать публикацию</h4>
                        <button
                            className="button"
                            onClick={() => props.toggleMode(false)}>
                            <span className="material-icons">close</span>
                        </button>
                    </div>
                    <input
                        className="PostCreateCard__input"
                        ref={editPostInput}
                        onChange={() =>
                            setEditedPost(editPostInput.current.value)
                        }
                        value={editedPost}
                        autoFocus
                    />
                    <button onClick={onSaveButton} className="button">
                        Сохранить
                    </button>
                </div>
            )}
        </>
    );
}

export default PostEditCard;
