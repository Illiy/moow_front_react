import React, { useEffect, useState } from "react";
import { addPost, productionGet, tehnikaGet, transportGet, warhouseGet } from "../../../API/api";

import angar from "../../../assets/angar4.png";

const Similar = () => {
    const lookItem = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    const massItem = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

    const url = window.location.pathname
    const prodId = url.split('/')[2]
    const [addPostInformation, setAddPostInformation] = useState([])
    const [warhouseList, setWarhouseGet] = useState([])
    const [transportList, setTransportGet] = useState([])
    const [tehnikaList, setTehnikaGet] = useState([])
    const [productionList, setProductionGet] = useState([])

    const similarItem = addPostInformation.category === 'Склади' ? warhouseList : addPostInformation.category === 'Транспорт' ? transportList : addPostInformation.category === 'Техніка' ? tehnikaList : addPostInformation.category === 'Продукція' ? productionList : ''

    useEffect(() => {
        addPost(prodId, setAddPostInformation)
        warhouseGet(setWarhouseGet)
        transportGet(setTransportGet)
        tehnikaGet(setTehnikaGet)
        productionGet(setProductionGet)
    }, [])

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    const historyWhatching = JSON.parse(localStorage.getItem("history"))

    const makeUniq = () => {
        const uniqSet = new Set(historyWhatching);
        return [...uniqSet];
    }

    const allLists = [...warhouseList, ...transportList, ...tehnikaList, ...productionList]

    const whatchingPosts = allLists === undefined ? '' : allLists.filter(el => el.id === makeUniq().filter(elle => elle === el.id)[0])

    return (
        <div className="similarBlock">
            <div className="top">
                <h4>Схожі оголошення</h4>
                <hr />
                <ul>
                    {similarItem !== '' ? similarItem.sort(() => Math.random() - 0.5).map((el, key) =>
                        <a href={'/unit/' + el.id} key={key}>
                            <div className="img" style={{ backgroundImage: `url(${'http://82.144.203.3:5000/' + el.img})` }} alt="" />
                            <h5>{el.title.length >= 14 ? el.title.substring(14, 0) + '...' : el.title}</h5>
                            <p>{el.content.filter(el => el.type === 'price')[0].value + ' ' + el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                        </a>
                    ) : ''}
                </ul>
            </div>
            <div className="center">
                <h4>Дивіться також</h4>
                <hr />
                <ul>
                    {similarItem !== '' ? similarItem.sort(() => Math.random() - 0.5).map((el, key) =>
                        <a href={'/unit/' + el.id} key={key}>
                            <div className="img" style={{ backgroundImage: `url(${'http://82.144.203.3:5000/' + el.img})` }} alt="" />
                            <h5>{el.title.length >= 14 ? el.title.substring(14, 0) + '...' : el.title}</h5>
                            <p>{el.content.filter(el => el.type === 'price')[0].value + ' ' + el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                        </a>
                    ) : ''}
                </ul>
            </div>
            {whatchingPosts.length === 0 ? '' :
                <div className="top">
                    <h4>Проглянуті оголошення</h4>
                    <hr />
                    <ul>
                        {whatchingPosts.length >= 10 ? whatchingPosts.slice(10).reverse().map((el, key) =>
                            <a href={'/unit/' + el.id} key={key}>
                                <div className="img" style={{ backgroundImage: `url(${'http://82.144.203.3:5000/' + el.img})` }} alt="" />
                                <h5>{el.title.length >= 14 ? el.title.substring(14, 0) + '...' : el.title}</h5>
                                <p>{el.content.filter(el => el.type === 'price')[0].value + ' ' + el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                            </a>
                        ) : whatchingPosts.reverse().map((el, key) =>
                            <a href={'/unit/' + el.id} key={key}>
                                <div className="img" style={{ backgroundImage: `url(${'http://82.144.203.3:5000/' + el.img})` }} alt="" />
                                <h5>{el.title.length >= 14 ? el.title.substring(14, 0) + '...' : el.title}</h5>
                                <p>{el.content.filter(el => el.type === 'price')[0].value + ' ' + el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                            </a>
                        )}
                    </ul>
                </div>}
        </div>
    )
}

export default Similar;