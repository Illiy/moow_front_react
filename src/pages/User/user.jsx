import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import { ReactDOM } from "react";

import UserDash from "./dush";

import logo from "../../assets/logo2.png";
import dia from "../../assets/profile/dia.svg";
import star from "../../assets/profile/reiting.svg";
import ver from "../../assets/Ver.svg";
import comm from "../../assets/commw.svg";
import logoItem from "../../assets/angar4.png";

const UserPage = () => {
    return (
        <div className="container">
            <div className="userBody">
                <div className="head">
                    <div className="left">
                        <img className="logo" src={logo} alt="" />
                        <div className="logo-index">
                            <img className="dia" src={dia} alt="" />
                            <img className="ver" src={ver} alt="" />
                        </div>
                    </div>
                    <div className="center">
                        <h2>Партнер 1</h2>
                        <p>Працює з MOOW<b> 3 роки і 7 місяців</b></p>
                        <div className="bottom">
                            <div>
                                <img src={star} alt="" />
                                <span>4.8</span>
                            </div>
                            <p>Середній рейтинг пропозицій</p>
                        </div>
                    </div>
                    <div className="right">
                        <button>
                            <span>Написати</span>
                            <img src={comm} alt="" />
                        </button>
                    </div>
                </div>
                <div className="body">
                    <div className="navBar">
                        <h3 className="categories">Категорії</h3>
                        <h3 className="all">Всі<span> (18)</span></h3>
                        <ul>
                            <li>Транспорт <span> (11)</span></li>
                            <li>Склади <span> (4)</span></li>
                            <li>Транспортні послуги <span> (3)</span></li>
                        </ul>
                    </div>
                    <div className="dash">
                        <UserDash/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;