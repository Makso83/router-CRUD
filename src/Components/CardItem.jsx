import React from "react";
import CardItemHeader from "./CardItemHeader";
import CardItemLikes from "./CardItemLikes";
import CardItemNewComment from "./CardItemNewComment";
import { NavLink } from "react-router-dom";

function CardItem(props) {
    return (
        <div className="CardItem__card_wrapper">
            <NavLink className="CardItem__link" to={"posts/" + props.id}>
                <CardItemHeader created={props.created} />
                <p className="CardItem__content">{props.content}</p>
            </NavLink>
            <CardItemLikes />
            <CardItemNewComment />
        </div>
    );
}

export default CardItem;
