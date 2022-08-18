import React, { useEffect, useState } from "react";

import SwiperSec from "./modules/swiper";
import Descript from "./modules/description";
import Buy from "./modules/buy";
import Similar from "./modules/similar";

import { addPost } from "../../API/api";
import addPostInformation from "../../API/api";
import { useNavigate } from "react-router-dom";

const ProductionOnce = () => {

    const url = window.location.pathname
    const prodId = url.split('/')[2]
    const [addPostInformation, setAddPostInformation] = useState([])
    const [historyProd, setHistoryProd] = useState([prodId])
    const fullhistoryr = JSON.parse(localStorage.getItem("history"))
    const makeUniq = () => {
        if (fullhistoryr !== null) { return fullhistoryr.filter(el => el === prodId)[0]; }
    }

    useEffect(() => {
        addPost(prodId, setAddPostInformation)
        if (localStorage.getItem("history")) {
            if (makeUniq() === undefined) {
                const historyMasive = JSON.parse(localStorage.getItem("history"))
                historyMasive.push(prodId)
                localStorage.removeItem("history")
                localStorage.setItem("history", JSON.stringify(historyMasive))
            }
            else if (makeUniq() !== undefined) {
                const historyMasive = JSON.parse(localStorage.getItem("history"))
                const historyMasiver = historyMasive.map(el => el !== prodId ? el : '')
                historyMasiver.push(prodId)
                localStorage.removeItem("history")
                const nmn = () => {
                    return historyMasiver.filter(el => el !== '');
                }
                localStorage.setItem("history", JSON.stringify(nmn()))
            }
        }
        else {
            localStorage.setItem("history", JSON.stringify(historyProd))
        }
        if (localStorage.getItem("history").length >= 15) {
            const historyMasive = JSON.parse(localStorage.getItem("history"))
            const historyMasiver = historyMasive.map(el => el !== el[0] ? el : '')
            localStorage.removeItem("history")
            const nmn = () => {
                return historyMasiver.filter(el => el !== '');
            }
            localStorage.setItem("history", JSON.stringify(nmn()))
        }
    }, [])


    console.log(prodId)

    return (
        <div className="container po-cont">
            <div className="ProductionOnce-top-block">
                <SwiperSec />
                <Buy />
            </div>
            <Descript addPostInformation={addPostInformation} />
            <Similar />
        </div>
    )
}

export default ProductionOnce;