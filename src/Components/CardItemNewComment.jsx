import React from "react";
import avatar from "../man1.jpg";

function CardItemNewComment() {
    return (
        <div className="CardItemNewComment__container">
            <img
                className="CardItemHeader__avatar small_avatar"
                src={avatar}
                alt="small avatar"
            />
            <input
                placeholder="Напишите комментарий..."
                className="CardItemNewComment__input"
            />
            <div className='CardItemNewComment__icon-block'>
                <span className="material-icons">sentiment_satisfied</span>
                <span className="material-icons">camera_alt</span>
                <span className="material-icons">gif</span>
                <span className="material-icons">sticky_note_2</span>
            </div>
        </div>
    );
}

export default CardItemNewComment;
