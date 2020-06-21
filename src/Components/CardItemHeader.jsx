import React from "react";
import avatar from "../man1.jpg";
import moment from "moment";

function CardItemHeader(props) {
    const timestamp = moment(props.created).toNow();

    return (
        <div className="CardItemHeader__wrapper">
            <div>
                <img
                    src={avatar}
                    alt="avatar"
                    className="CardItemHeader__avatar"
                />
            </div>
            <div>
                <h3 className="CardItemHeader__username">Ilnaz Gilyazov</h3>
                <div className="CardItemHeader__userRole-container">
                    <span className="material-icons">self_improvement</span>
                    <p className="CardItemHeader__userRole">
                        Основатель группы{" "}
                        <span className="CardItemHeader__timestamp">
                            - {timestamp}.
                        </span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardItemHeader;
