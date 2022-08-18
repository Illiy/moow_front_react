import React from "react";

import angar from "../../assets/angar.png";
import star from "../../assets/star.png";
import korzina from "../../assets/korzina.svg";
import flag from "../../assets/flag.svg";
import logo from "../../assets/logo1.png";
import pluse from "../../assets/puse.svg";

import { useState } from "react";

const CommQest = () => {
    const [count,setCount] = useState(false);
    const [add ,setAdd] = useState(false);

    return (
        <div className="commBlock">
            <div className="commBlock-head">
                <div className="commBlock-head-left">
                    <img className="commBlock-icon" src={angar} alt="" />
                    <div className="commBlock-rewue">
                        <h2>Склад 1</h2>
                        <p>1200/кв.м.</p>
                        <div className="commBlock-bottom">
                            <div>
                                <img src={star} alt="" />
                                <span>4.8</span>
                            </div>
                            <span className="commBlock-value">300 грн/кв.м.</span>
                        </div>
                    </div>
                </div>
                <div className="commBlock-head-center">
                    <button className="commBlock-button1">Змінити пропозицію</button>
                    <button className="commBlock-button2">Замовити</button>
                </div>
                <div className="commBlock-head-right">
                    <button className="button1">
                        <img src={korzina} alt="" />
                    </button>
                    <button className="button2">
                        <img src={flag} alt="" />
                    </button>
                    <div className="button3">
                        <button onClick={() =>  setCount(!count)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            
            {!count ? null :

                <div className="commBlock-body">
                    <div className="left">
                        {!add ? null :
                            <div className="block">
                                <div className="head">
                                    <h3>Оберіть  кого додати до чату</h3>
                                    <button onClick={() =>  setAdd(!add)}></button>
                                </div>
                                <ul className="body">
                                    <li className="person">
                                        <img src={logo} alt="" />
                                        <span>Вова</span>
                                    </li>
                                    <li className="person">
                                        <img src={logo} alt="" />
                                        <span>Вова</span>
                                    </li>
                                    <li className="person">
                                        <img src={logo} alt="" />
                                        <span>Вова</span>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="right">
                        <div className="checked1">
                            <div className="box">
                                <input class="type-checkbox" id="toogle" type="checkbox" name="name"/>
                                <label class="estado" for="toogle">
                                    <span class="aprobado"></span>
                                </label>
                            </div>
                            <p>Заборонити видаляти повідомленняя</p>
                        </div>
                        <div className="checked2">
                            <div className="box">
                                <input class="type-checkbox" id="toogle2" type="checkbox" name="name"/>
                                <label class="estado" for="toogle2">
                                    <span class="aprobado"></span>
                                </label>
                            </div>
                            <p>Випадково змінити імена для анонімності</p>
                        </div>
                        <button className="button1" onClick={() =>  setAdd(!add)}>
                            <img src={pluse} alt="" />
                            <p>Додати людину до чату</p>
                        </button>
                        <div className="button2">
                            <img src={korzina} alt="" />
                            <p>Видалити цей чат</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CommQest;