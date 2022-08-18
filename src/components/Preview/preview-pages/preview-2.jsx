import React from "react";

import img1 from "../../../assets/preview/1.svg";
import img2 from "../../../assets/preview/2.svg";
import img3 from "../../../assets/preview/3.svg";
import img4 from "../../../assets/preview/4.svg";
import img5 from "../../../assets/preview/5.svg";
import back from "../../../assets/preview/back.svg";

const PreviewTwo = (props) => {
    const {count,setCount} = props;
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
                <p className="textBlock-2">Верифіковані учасники <br/><br/> Ви можете бути впевненими у надійності учасників платформи. Будь-яка людина, яка надає послуги, проходить декілька видів верифікації. Топ учасникам проводять аудит і вони мають відповідний статус. Також платформа веде публічну історію діяльності та надає рейтингову систему.</p>
                <button onClick={() => setCount(2)}>
                    <p>Далі</p>
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="34" cy="34" r="34" fill="#171717" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6499 46L34 44.1691L45.3132 34L34 23.8309L35.6499 22L49 34L35.6499 46Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 32.5L46 32.5L46 35.5L19 35.5L19 32.5Z" fill="white" />
                    </svg>
                </button>

            </div>
            <div className="gradient-back"></div>
            <img className="back" src={back} alt="" />
        </div>
    )
}

export default PreviewTwo;