import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { addPost, createGroup } from "../../../API/api";

import comm from "../../../assets/comm.svg"

const Buy = () => {

    const url = window.location.pathname
    const prodId = url.split('/')[2]
    const [addPostInformation, setAddPostInformation] = useState([])

    useEffect(() => {
        addPost(prodId, setAddPostInformation)
    }, [])

    const userData = JSON.parse(localStorage.getItem("userMove"))

    const userPhone = addPostInformation.length === 0 ? '' : addPostInformation.creator.phone

    const history = useNavigate()

    const wright = () => {
        createGroup(userData.token, userPhone, history)
    }

    return (
        <div className="buyBlock">
            <h2>{addPostInformation.length === 0 ? '' :addPostInformation.data.title}</h2>
            <p>{addPostInformation.length === 0 ? '' :addPostInformation.data.content.filter(el => el.type === 'price')[0].value + ' ' + addPostInformation.data.content.filter(el => el.type === 'price')[0].typeAmount}</p>
            <div className="buyTegBlock">
                <span>#тег1</span>
                <span>#тег2</span>
                <span>#тег3</span>
            </div>
            <div className="buyInputBlock">
                <div>
                    <label htmlFor="start">Починаючи з</label>
                    <input type="date" placeholder="__-__-____" name="" id="start" />
                </div>    
                <div>
                    <label htmlFor="end">Закінчуючи</label>
                    <input type="date" name="" id="end" />
                </div>    
            </div>
            <div className="buyButtonBlock">
                <button className="button1">Замовити</button>
                <button className="button2" onClick={() => wright()}>Написати <img src={comm} alt="" /></button>
            </div>
        </div>
    )
}

export default Buy;