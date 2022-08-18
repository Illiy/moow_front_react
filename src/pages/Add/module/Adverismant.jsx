import React, { useEffect, useState } from "react";
import SwiperSec from "./swiper";
import { Link, useNavigate } from "react-router-dom";
import { addPost, delitePost } from "../../../API/api";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { type } from "@testing-library/user-event/dist/type";


const Adverismant = (props) => {

    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if(isRegister){}
        else {
            history("/sign-in")
        }
    },[])

    const url = window.location.pathname
    const prodId = url.split('/')[2]
    const [addPostInformation, setAddPostInformation] = useState([])

    useEffect(() => {
        addPost(prodId, setAddPostInformation)
    }, [])

    const timestamp = Date.now(addPostInformation.length === 0 ? '' : addPostInformation.data.content[0].value)
    const trueData = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
    const [delitePopup, setDelitePopup] = useState(false)
    const userData = JSON.parse(localStorage.getItem("userMove"))

    const delitePostFunction = () => {
        delitePost(userData.token, url.split('/')[2])
        history("/advertisment")
    }

    return (
        <div className="container addContainer">
            <div className="delite-popup" style={delitePopup === false ? {display: 'none'} : {display: 'flex'}}>
                <h2>Підтвердити видалення</h2>
                <button className="yes" onClick={()=>delitePostFunction()}>Так</button>
                <button className="no" onClick={() => setDelitePopup(false)}>Ні</button>
            </div>
            <div className="secondSlide" style={{ paddingBottom: '140px' }}>
                <div className="left">
                    <h2>{addPostInformation.length === 0 ? '' :addPostInformation.data.title}</h2>
                    <div className="swiperBlock">
                        <Swiper
                            modules={[Navigation, Pagination, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true, dynamicBullets: true }}
                        >
                            {addPostInformation.length === 0 ? '' :addPostInformation.data.img.map((el, key) =>
                                <SwiperSlide key={key}>
                                    <div style={{backgroundImage: `url(${'http://82.144.203.3:5000/' + el})`}} className="img"></div>
                                    <div className="back"></div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="blockButton">
                            <button className="copy">Зробити копію</button>
                            <button className="delite" onClick={() => setDelitePopup(true)}>Видалити</button>
                            <Link to="/rekalama" className="reklama">Рекламувати оголошення</Link>
                        </div>
                    </div>
                </div>
                <div className="right adverismant-right">
                    <div className="rightBlock">
                        {addPostInformation.length === 0 ? '' : addPostInformation.data.content.map((el, key) =>
                            el.type === 'oblast' ? '' :
                            el.type === 'date.now' ?
                            <div>
                                <span>{el.name}</span>
                                <span className="span">{trueData.split(',')[0]}</span>
                            </div>:
                            el.type === 'int' ? 
                            <div>
                                <span>{el.name}</span>
                                <span className="span">{el.value} {el.typeAmount}</span>
                            </div> :
                            <div>
                                <span>{el.name}</span>
                                <span className="span">{el.value}</span>
                            </div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="revue">Опис</label>
                        <textarea name="" id="revue" cols="30" rows="10" value={addPostInformation.length === 0 ? '' : addPostInformation.data.description}></textarea>
                    </div>
                    <div>
                        <label htmlFor="conditions">Умови</label>
                        <textarea name="" id="conditions" cols="30" rows="10" value={addPostInformation.length === 0 ? '' : addPostInformation.data.umovi}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adverismant;