import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirstSlideItem from "./firstSlideItem.jsx";
import { myAdd } from "../../../API/api.js";

import filter from "../../../assets/filter.jpg";
import kalendar from "../../../assets/kalendar.svg";
import tb from "../../../assets/top-bottom.svg";


const FirstSlide = (props) => {
    const [myAddList, setMyAdd] = useState()
    const userData = JSON.parse(localStorage.getItem("userMove"))
    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if (isRegister) { }
        else {
            history("/sign-in")
        }
    }, [])

    useEffect(() => {
        myAdd(userData !== null ? userData.token : '', setMyAdd)
    }, [])

    return (
        <div className="container addContainer">
            <div className="firstSlide">
                <h2 className="h2">Оголошення користувача</h2>
                {myAddList === undefined ? <span className="zaglushka">Тут поки що нічого немає</span> : myAddList.length === 0 ? <span className="zaglushka">Тут поки що нічого немає</span>
                    :
                <div className="filter-menu">
                    <button className="filt-1">
                        <img src={filter} alt="" />
                        <span>Фільтр</span>
                    </button>
                    <button className="filt-2">
                        <img src={kalendar} alt="" />
                    </button>
                    <button className="filt-3">
                        <span>Сортувати</span>
                        <img src={tb} alt="" />
                    </button>
                </div>}
                <div className="list">
                    {myAddList === undefined ? '' :myAddList.map((el, key) => 
                        <FirstSlideItem key={key} img={el.img} tytle={el.title} data={el.content.filter(el => el.type === 'date.now')[0].value } id={el.id} status={el.status} />
                    )}
                </div>
                <Link to="/add-advertisement" className="btn">Додати</Link>
            </div>
        </div>
    )
}

export default FirstSlide;