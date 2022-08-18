import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";

import logoItem from "../../assets/angar4.png";
import star from "../../assets/profile/reiting.svg";

const UserDash = (props) => {
    const item = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsRerPage] = useState(18);

    const totalItems = item.length
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalItems / itemsRerPage); i++) {
        pageNumbers.push(i)
    }

    const lastItemIndex = currentPage * itemsRerPage;
    const firstItemIndex = lastItemIndex - itemsRerPage;
    const currentItems = item.slice(firstItemIndex, lastItemIndex);

    const parinate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (pageNumbers.length > currentPage) {
            setCurrentPage(prev => prev + 1);
        }
        else {
            setCurrentPage(1)
        }
    };

    const prevPage = () => {
        if (currentPage === 1) {
            setCurrentPage(pageNumbers.length)
        }
        else {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <div>
            <ul>
                {currentItems.map((el, key) =>
                    <li className="item">
                        <img className="logo" src={logoItem} alt="" />
                        <div className="right">
                            <h2 className="h2">Транспорт 1</h2>
                            <p className="p">Характеристика</p>
                            <div className="bottom">
                                <div className="left">
                                    <img src={star} alt="" />
                                    <span>4.8</span>
                                </div>
                                <span className="right">300 грн/год</span>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            <div className="pugination-block">
                <button className="btn btn-prev" onClick={prevPage}></button>
                <ul className="pagination">
                {pageNumbers.map(number => (
                    currentPage <= 5 ? (
                        number === 1 || number === 2 || number === 3 || number === 4 || number === 5 || number === pageNumbers.length ?
                            <li className={currentPage === number ? 'pagin-item-active' : number === pageNumbers.length ? 'last-item' : 'pagin-item'} key={number}>
                                <span onClick={() => parinate(number)} className="page-lin">
                                    {number}
                                </span>
                            </li>
                            : null) : currentPage <= pageNumbers.length - 5 ?
                        (
                        number === 1 || number === currentPage - 2 || number === currentPage - 1 ||number === currentPage || number === currentPage + 1 || number === currentPage + 2 || number === pageNumbers.length ?
                            <li className={currentPage === number ? 'pagin-item-active' : number === pageNumbers.length ? 'last-item' : number === 1 ? 'first-item' : 'pagin-item'} key={number}>
                                <span onClick={() => parinate(number)} className="page-lin">
                                    {number}
                                </span>
                            </li>
                            : null) : (
                        number === 1 || number === pageNumbers.length - 4 || number === pageNumbers.length - 3  || number === pageNumbers.length - 2  ||number === pageNumbers.length - 1  || number === pageNumbers.length ?
                            <li className={currentPage === number ? 'pagin-item-active' : number === 1 ? 'first-item' : 'pagin-item'} key={number}>
                                <span onClick={() => parinate(number)} className="page-lin">
                                    {number}
                                </span>
                            </li>
                            : null)
                    ))
                    }
                    </ul>
                <button className="btn btn-next" onClick={nextPage}></button>
            </div>
            
        </div>
    )
}

export default UserDash;