import React from "react";

function CardItemLikes() {
    return (
        <div className="CardItemLikes-container">
            <div className="CardItemLikes-button">
                <span className="material-icons">thumb_up_alt</span>
                <p>Нравится</p>
            </div>
            <div className="CardItemLikes-button">
                <span className="material-icons">mode_comment</span>
                <p>Комментировать</p>
            </div>
        </div>
    );
}

export default CardItemLikes;
