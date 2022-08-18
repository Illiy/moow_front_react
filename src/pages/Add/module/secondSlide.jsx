import React, { useEffect, useState } from "react";

import { sendProduction, sendTehnika, sendTransport, sendWarhouse, templates } from "../../../API/api";
import Selectors from "./secSlideSelectors";
import SwiperSec from "./swiper";
import AddRight from "./right";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SecSlide = (props) => {

    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if (isRegister) { }
        else {
            history("/sign-in")
        }
    }, [])

    const [chooseOption1, setChooseOption1] = useState('Зерно')
    const [chooseOption2, setChooseOption2] = useState('Склади')
    const { file, setFile } = props

    // дата  
    let date = new Date()
    let output = String(date.getDate()).padStart(2, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();

    // описание 
    const [revue, setRevue] = useState('')

    // описание 
    const [conditions, setConditions] = useState('')

    // Тайтл
    const [title, setTitle] = useState('')

    const [template, setTemplate] = useState([])

    const sendedFile = file[0]

    const goodTemplate = template.length === 0 ? [] : template.filter((el) => el.category === chooseOption2)[0].content;

    const addPost = () => {
        if (title !== '' && revue !== '' && conditions !== '' && file.length !== 0 && goodTemplate.filter(el => el.value === '').length === 0 && goodTemplate.filter(el => el.value === 0).length === 0) {
            if (chooseOption2 === 'Склади') { sendWarhouse(title, revue, conditions, goodTemplate, userData !== null ? userData.token : '', sendedFile) }
            else if (chooseOption2 === 'Транспорт') { sendTransport(title, revue, conditions, goodTemplate, userData !== null ? userData.token : '', sendedFile) }
            else if (chooseOption2 === 'Техніка') { sendTehnika(title, revue, conditions, goodTemplate, userData !== null ? userData.token : '', sendedFile) }
            else if (chooseOption2 === 'Продукція') { sendProduction(title, revue, conditions, goodTemplate, userData !== null ? userData.token : '', sendedFile) }
            history("/advertisment")
        }
        if (title === '') {
            toast.error("Будь ласка введіть назву для поста", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        if (revue === '') {
            toast.error("Будь ласка напешіть опис для вашого поста", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        if (conditions === '') {
            toast.error("Будь ласка зповніть графу умови", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

        if (file.length === 0) {
            toast.error("Будь ласка завантажте зображення", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

        if (goodTemplate.filter(el => el.value === '').length > 0 || goodTemplate.filter(el => el.value === 0).length > 0) {
            toast.error("Будь ласка заповніть характеристику", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }

    useEffect(() => {
        templates(setTemplate)
    }, [])

    const userData = JSON.parse(localStorage.getItem("userMove"))
    return (
        <div className="container addContainer">
            <div className="secondSlide">
                <div className="left">
                    <h2>Додати оголошення</h2>
                    <Selectors goodTemplate={goodTemplate} template={template} setTemplate={setTemplate} chooseOption1={chooseOption1} setChooseOption1={setChooseOption1} chooseOption2={chooseOption2} setChooseOption2={setChooseOption2} />
                    <SwiperSec file={file} setFile={setFile} />
                    <button className="add-post-button" onClick={() => addPost()}>Добавить</button>
                </div>
                <AddRight file={file} title={title} setTitle={setTitle} template={template} setTemplate={setTemplate} revue={revue} setRevue={setRevue} conditions={conditions} setConditions={setConditions} chooseOption2={chooseOption2} chooseOption1={chooseOption1} />
                <button className="add-post-button  block-320" onClick={() => addPost()}>Добавить</button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default SecSlide 