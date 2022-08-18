import React from "react";

import star from "../../../assets/profile/reiting.svg";
import kalendar from "../../../assets/kalendar.svg";
import hand from "../../../assets/hand.svg";
import { Link } from "react-router-dom";

const FirstSlideItem = (props) => {

    const { img, tytle, data, id, status } = props

    return (
        <div>
            {
                status === 'success' ?
                    <Link to={'/choosen-myPost/' + id} className="item">
                        <div className="left">
                            <h2>{tytle}</h2>
                            <div className="bottom">
                                <div className="hand" style={status === 'success' ? { backgroundColor: 'green' } : status === 'wait' ? { backgroundColor: 'orange' } : { backgroundColor: 'red' }}></div>
                                <div>
                                    <img className="star" src={star} alt="" />
                                    <span>4.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <p>1</p>
                            <div>
                                <span>{new Date(data).getDate() + ':' + new Date(data).getMonth() + ':' + new Date(data).getFullYear()}</span>
                                <img src={kalendar} alt="" />
                            </div>
                        </div>
                    </Link>
                    :
                    <div className="item" style={{opacity: .5}}>
                        <div className="left">
                            <h2>{tytle}</h2>
                            <div className="bottom">
                                <div className="hand" style={status === 'success' ? { backgroundColor: 'green' } : status === 'wait' ? { backgroundColor: 'orange' } : { backgroundColor: 'red' }}></div>
                                <div>
                                    <img className="star" src={star} alt="" />
                                    <span>4.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <p>1</p>
                            <div>
                                <span>{new Date(data).getDate() + ':' + new Date(data).getMonth() + ':' + new Date(data).getFullYear()}</span>
                                <img src={kalendar} alt="" />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default FirstSlideItem;