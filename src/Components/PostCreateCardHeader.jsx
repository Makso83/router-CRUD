import React from "react";
import { NavLink } from "react-router-dom";

function PostCreateCardHeader() {
    return (
        <div className="PostCreateCard__header_container">
            <div className="PostCreateCard__tabs_container">
                <div className="PostCreateCard__tab">
                    <span className="material-icons">create</span>
                    <p> Публикация</p>
                </div>
                <div className="PostCreateCard__tab">
                    <span className="material-icons">camera_alt</span>
                    <p> Фото/видео</p>
                </div>
                <div className="PostCreateCard__tab">
                    <span className="material-icons">videocam</span>
                    <p> Прямой эфир</p>
                </div>
                <div className="PostCreateCard__tab">
                    <span className="material-icons">more</span>
                    <p> Ещё</p>
                </div>
            </div>
            <NavLink className="PostCreateCard__close" to="/">
                <span className="material-icons">close</span>
            </NavLink>
        </div>
    );
}

export default PostCreateCardHeader;
