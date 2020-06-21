import React from "react";
import { postApi } from "../API";
import { useState } from "react";
import PostDetails from "./PostDetails";
import PostEditCard from "./PostEditCard";

function PostView(props) {
    const [isEdit, setIsEdit] = useState();

    async function onDeleteButton() {
        await postApi.deletePost(props.id);
    }

    const toggleMode = (flag) => {
        setIsEdit(flag);
    };

    return (
        <>
            {isEdit ? (
                <PostEditCard {...props} toggleMode={toggleMode} getPostsFromServer={props.getPostsFromServer}/>
            ) : (
                <PostDetails
                    {...props}
                    toggleMode={toggleMode}
                    onDeleteButton={onDeleteButton}
                />
            )}
        </>
    );
}

export default PostView;
