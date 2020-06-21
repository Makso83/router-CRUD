import React from 'react'
import CardItemHeader from './CardItemHeader'
import CardItemLikes from './CardItemLikes'
import { NavLink } from 'react-router-dom'

function PostDetails(props) {
    return (
        <div className="CardItem__card_wrapper">
                    <CardItemHeader created={props.created} />
                    <p className="CardItem__content">{props.children}</p>
                    <CardItemLikes />
                    <div className='PostView__buttons_container'>
                        <button className='button' onClick={() => props.toggleMode(true)}>Редактировать</button>
                        <NavLink
                            onClick={props.onDeleteButton}
                            className="button delete-button"
                            to={"/"}>
                            Удалить пост
                        </NavLink>
                    </div>
                </div>
    )
}

export default PostDetails
