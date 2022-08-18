import React from "react";

import { Link } from "react-router-dom";

import img1 from "../../../assets/preview/1.svg";
import img2 from "../../../assets/preview/2.svg";
import img3 from "../../../assets/preview/3.svg";
import img4 from "../../../assets/preview/4.svg";
import img5 from "../../../assets/preview/5.svg";
import back from "../../../assets/preview/back.svg";
import galka from "../../../assets/preview/galka.svg"

const PreviewThree = (props) => {
    const createFirstTime = () => {
        localStorage.setItem("firstTime", JSON.stringify({value : true}))
    }
    return (
        <div className="previewBlock">
            <div className="imgBlock">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
            <div className="textBlock">
                <ul className="textBlock-list">
                    <li>
                        <img src={galka} alt="" />
                        <p>
                            Маркетплейс для всього ринку агропродукції України. Зручний каталог та система фільтрації позицій.
                        </p>
                    </li>
                    <li>
                        <img src={galka} alt="" />
                        <p>
                            Ваше замовлення та транспорт відстежуються в онлайн режимі на мапі завдяки GPS трекерам.
                        </p>
                    </li>
                    <li>
                        <img src={galka} alt="" />
                        <p>
                            Через наш унікальний чат ви можете не тільки уточнювати деталі, а навіть одразу замовляти товари та послуги.
                        </p>
                    </li>
                    <li>
                        <img src={galka} alt="" />
                        <p>
                            Різні рівні надійності партнерів. Будьте впевнені, що ваші домовленості будуть виконані.
                        </p>
                    </li>
                </ul>
                <a href="/" className="link" onClick={() => createFirstTime()}>
                    <p>Почати</p>
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="34" cy="34" r="34" fill="#171717" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6499 46L34 44.1691L45.3132 34L34 23.8309L35.6499 22L49 34L35.6499 46Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 32.5L46 32.5L46 35.5L19 35.5L19 32.5Z" fill="white" />
                    </svg>
                </a>

            </div>
            <div className="gradient-back"></div>
            <img className="back" src={back} alt="" />
        </div>
    )
}

export default PreviewThree;