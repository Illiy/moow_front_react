import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { addPost, addToRating, getToRating } from "../../../API/api";

import like from '../../../assets/profile/like.svg';
import fullLike from '../../../assets/profile/full-star.svg';
import reiting from '../../../assets/profile/reiting.svg';
import glas from '../../../assets/glas.svg';
import reitingB from '../../../assets/retingB.svg'
import img from '../../../assets/angar3.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SwiperSec = () => {

    const url = window.location.pathname
    const prodId = url.split('/')[2]
    const [addPostInformation, setAddPostInformation] = useState([])
    const [ratingList, setRatingList] = useState()
    const [aaa, setAaa] = useState()

    useEffect(() => {
        addPost(prodId, setAddPostInformation)
        getToRating(setRatingList)
    },[])

    const userData = JSON.parse(localStorage.getItem("userMove"))

    if (ratingList !== undefined && addPostInformation.length !== 0 && aaa !== true && aaa !== false) {
        setAaa(ratingList.data.filter(el => el.id === addPostInformation.data.id)[0] === undefined ? false : true)
    }

    const ratingButton = () => {
        addToRating(prodId, userData.token, addPostInformation.category)
        if (aaa === true) {
            setAaa(false)
        } else if (aaa === false) {
            setAaa(true)
        }
    }

    return(
        <div className="swiperBlock">
            <Swiper 
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {addPostInformation.length === 0 ? '' : addPostInformation.data.img.map((el,key) => 
                <SwiperSlide key={key}>
                    <div className="img" style={{backgroundImage: `url(${'http://82.144.203.3:5000/' + el})`}} alt="" />
                    <div className="back"></div>
                </SwiperSlide>
                )}
            </Swiper>
            <img onClick={() => ratingButton()} src={aaa === true ? fullLike : aaa === false ? like : ''}  className="like" alt="" />
            <div className="reiting">
                <img src={reitingB} alt="" />
                <span>4.8</span>
            </div>
            <div className="watch">
                <span>234</span>
                <img src={glas} alt="" />
            </div>
        </div>
    )
}

export default SwiperSec;