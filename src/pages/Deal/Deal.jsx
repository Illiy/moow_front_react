import React, { useState } from "react";

import filter from "../../assets/filter.jpg";
import kalendar from "../../assets/kalendar.svg";
import tb from "../../assets/top-bottom.svg";
import star from "../../assets/star.png"

const Deal = () => {
    const items = ['', '', '', '', '', '', '', '']
    const [count, setCount] = useState(1)

    return (
        <div className="container deal">
            {count===1 ? 
            <div className="deal-block">
                <h2>Угоди користувача</h2>
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
                </div>
                <div className="list">
                    {items.map((el, key) => 
                    <div className="item" onClick={() => setCount(2)}>
                        <div className="left">
                            <h3>Аренда транспорта</h3>
                            <span>21.06.2022</span>
                        </div>
                        <div className="right">
                            <div>
                                <img src={star} alt="" />
                                <span>4.8</span>
                            </div>
                            <span>3000 грн/год</span>
                        </div>
                    </div>
                    )}
                </div>
            </div> :
            <div className="deal-sec">
                <h2>Угода</h2>
                <div className="deal-block">
                    <div>
                        <span>Дата</span>
                        <span>02-02-2022</span>
                    </div>
                    <div>
                        <span>Товар/Послуга</span>
                        <span>Оренда склада 1</span>
                    </div>
                    <div>
                        <span>Контагент</span>
                        <span>Партнер 1</span>
                    </div>
                    <div>
                        <span>Сума</span>
                        <span>5000 грн</span>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}

export default Deal