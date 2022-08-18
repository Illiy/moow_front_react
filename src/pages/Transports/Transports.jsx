import React, { useEffect, useState } from 'react'

import category from '../../storage/category'
import angar from '../../assets/angar.png'
import star from "../../assets/star.png"
import filter from '../../assets/filter1.png'
import upDown from '../../assets/top-bottom.svg'
import stock from "../../assets/dashboard/stock.svg"
import transport from '../../assets/dashboard/transport.svg'
import tech from "../../assets/dashboard/tech.svg"
import product from "../../assets/dashboard/product.svg"

import CategoryScrollUp from '../../components/CategoryScrollUp/CategoryScrollUp'
import { Link } from 'react-router-dom'
import { productionGet, tehnikaGet, transportGet, warhouseGet } from '../../API/api'

const Transports = () => {
    const url = window.location.pathname
    const prodListId = url.split('/')[2]

    const [warhouseList, setWarhouseGet] = useState([])
    const [transportList, setTransportGet] = useState([])
    const [tehnikaList, setTehnikaGet] = useState([])
    const [productionList, setProductionGet] = useState([])
    const activeList = prodListId === 'warhouseList' ? warhouseList : 
                       prodListId === 'transportList' ? transportList : 
                       prodListId === 'tehnikaList' ? tehnikaList :
                       prodListId === 'zerno' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === 'Зерно'):
                       prodListId === 'rozsada' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === 'Розсада'):
                       prodListId === 'ovoch' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === 'Овочі'):
                       prodListId === 'hudoba' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === 'Худоба'):
                       prodListId === 'fruits' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === 'Фрукти'):
                       prodListId === 'dobruvo' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === 'Добрива'):
                       null

    useEffect(() => {
        warhouseGet(setWarhouseGet)
        transportGet(setTransportGet)
        tehnikaGet(setTehnikaGet)
        productionGet(setProductionGet)
    }, [])
        
    const [selectChecked1, setSelectChecked1] = useState(false)
    const [filterChecked, setFilterChecked] = useState(false)

    const filterActive = () => {
        setFilterChecked(filterChecked === false ? true : false)
    }

    const selectOne = () => {
        selectChecked1 === false ? setSelectChecked1(true): setSelectChecked1(false)
    }

    const tomat = [
        {name:'warhouseList' , content:{name: 'Склади', img: stock,}},
        {name: 'transportList',  content:{name: 'Транспорт', img: transport,}},
        {name: 'tehnikaList',  content:{name: 'Техніка', img: tech,}},
        {name: 'zerno',  content:{name: 'Зерно', img: product,}},
        {name: 'ovoch',  content:{name: 'Овочі', img: product,}},
        {name: 'fruits',  content:{name: 'Фрукти', img: product,}},
        {name: 'hudoba',  content:{name: 'Худоби', img: product,}},
        {name: 'dobruvo',  content:{name: 'Добрива', img: product,}},
        {name: 'rozsada',  content:{name: 'Розсада', img: product,}}
    ]

    return(
        <main>
            <div className='container po-cont' style={{paddingTop: 125}}>
            {tomat.filter(elle => elle.name === prodListId).map((el,key) => 
                    <div key={key} className='col-md-12 p-0'>
                        <div className="category_header" style={{marginBottom: '0px'}}>
                            <div>
                                <img src={el.content.img}/>
                                <p>{el.content.name}</p>
                            </div>
                            <div>
                                <Link className='a' to={'/unit-list-map/' + prodListId} style={{width:185}}>На карті</Link>
                            </div>
                        </div>
                        <div className="category_middle">
                            <div className="left">
                                <span>#тег1</span>
                                <span>#тег2</span>
                                <span>#тег3</span>
                            </div>
                            <div className="right">
                                <div className="sort">
                                    <span>Сортувати</span>
                                    <img src={upDown} alt="" />
                                </div>
                                <div className="filter">
                                    <span onClick={() => filterActive()}>Фільтр</span>
                                    <img src={filter} alt="" onClick={() => filterActive()} />
                                    <div style={filterChecked === false ? {height: '0px', width: '0px', padding: '0px'} : {height: '540px', width: '320px', padding: '20px 20px 35px 20px'}} className="filter-block">
                                        <div className="head">
                                            <div>
                                                <img src={filter} alt="" />
                                                <span>Фільтр</span>
                                            </div>
                                            <span className="close" onClick={() => filterActive()}>x</span>
                                        </div>
                                        <div className="main">
                                            <div className="main-block-1">
                                                <span>Область знаходження</span>
                                                <div className="select">
                                                    <h3 onClick={() => selectOne()}>Київська область</h3>
                                                    <ul style={selectChecked1 === false ? {height: '0px'} : {height: '100%'}}>
                                                        <li onClick={() => selectOne()}>Київська область</li>
                                                        <li onClick={() => selectOne()}>Винницкая область</li>
                                                        <li onClick={() => selectOne()}>Одеская область</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="main-block-2">
                                                <input type="checkbox" name="" id="camera" />
                                                <label htmlFor="camera">Камера</label>
                                            </div>
                                            <div className="main-block-3">
                                                <span>Площа</span>
                                                <div>
                                                    <input type="number" name="" id="" />
                                                    <span> - </span>
                                                    <input type="number" name="" id="" />
                                                    <span className="kmm">кв.м.</span>
                                                </div>
                                            </div>
                                            <div className="main-block-4">
                                                <span>Вартість оренди</span>
                                                <div>
                                                    <input type="number" name="" id="" />
                                                    <span> - </span>
                                                    <input type="number" name="" id="" />
                                                    <span>грн</span>
                                                </div>
                                            </div>
                                            <div className="main-block-6">
                                                <input type="checkbox" name="" id="rampi"  />
                                                <label htmlFor="rampi">Рампи</label>
                                            </div>
                                            <div className="main-block-7">
                                                <span>Дата поновлення оголошення:</span>
                                                <input type="date" name="" id="" />
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <button className="button1">Фільтрувати</button>
                                            <button className="button2">Скинути</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content-body'>
                            <div className='col-md-12 p-0'>
                                <div className='row transport-super-puper-row'>
                                <div className='col-md-3 oblast-list'>
                                    <CategoryScrollUp header={"Київська область"} bodyContent={['Транспорт 1', "Транспорт 2"]}/>
                                    <CategoryScrollUp header={"Житомирська область"} bodyContent={['Транспорт 1']}/>
                                    <CategoryScrollUp header={"Вінницька область"} bodyContent={['Транспорт 4', "Транспорт 8"]}/>
                                </div>
                                <div className='col-md-9 transport-right'>
                                    <div className='row row-block'>
                                        {activeList.map((el,key) =>
                                        <div key={key} className='col-md-4 transport-col-md-4' style={{paddingLeft: '5px', paddingRight: '5px',}}>
                                            <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                <div className='dashboard_subcontainer'>
                                                    <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img})` }}></div>
                                                </div>
                                                <div className='dashboard_subcontainer'>
                                                    <h2>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h2>
                                                    <span className='all-text-on-dushbord'>{el.title}</span>
                                                    <p className='additional-info_dashboard'>1200/кв.м.</p>
                                                    <div className='menu-info-dashboard'>
                                                        <div style={{width: '30%'}} className='menu-rating-item-dashboard'>
                                                        <img src={star} alt="star" />
                                                        {el.like.length === 0 ? <p>0</p> : <p>5</p>}
                                                        </div>
                                                        <div style={{width:'70%'}}>
                                                            <p className='dashboard-item-price'>{JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).length >= 5 ? JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).substring(4, 0) + '...' : el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                                                            <span className='all-text-on-dushbord'>{el.content.filter(el => el.type === 'price')[0].value + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        )} 
                                    </div>
                                    <div className='row row-none transport-row'>
                                        {activeList.map((el,key) =>
                                        <div key={key} className='col-md-4 transport-col-md-4' style={{paddingLeft: '5px', paddingRight: '5px',}}>
                                            <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                <div className='dashboard_subcontainer'>
                                                    <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                                </div>
                                                <div className='dashboard_subcontainer'>
                                                    <h2>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h2>
                                                    <span className='all-text-on-dushbord'>{el.title}</span>
                                                    <p className='additional-info_dashboard'>1200/кв.м.</p>
                                                    <div className='menu-info-dashboard'>
                                                        <div style={{width: '30%'}} className='menu-rating-item-dashboard'>
                                                        <img src={star} alt="star" />
                                                        {el.like.length === 0 ? <p>0</p> : <p>5</p>}
                                                        </div>
                                                        <div style={{width:'70%'}}>
                                                            <p className='dashboard-item-price'>{JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).length >= 5 ? JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).substring(4, 0) + '...' : el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                                                            <span className='all-text-on-dushbord'>{el.content.filter(el => el.type === 'price')[0].value + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        )} 
                                    </div>
                                    <div className='row row-mobile transport-row'>
                                        {activeList.map((el,key) =>
                                        <div key={key} className='col-md-4 transport-col-md-4' style={{paddingLeft: '5px', paddingRight: '5px',}}>
                                            <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                <div className='dashboard_subcontainer'>
                                                    <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                                </div>
                                                <div className='dashboard_subcontainer'>
                                                    <h2>{el.title.length >= 30 ? el.title.substring(30, 0) + '...' : el.title}</h2>
                                                    <span className='all-text-on-dushbord'>{el.title}</span>
                                                    <p className='additional-info_dashboard'>1200/кв.м.</p>
                                                    <div className='menu-info-dashboard'>
                                                        <div style={{width: '30%'}} className='menu-rating-item-dashboard'>
                                                        <img src={star} alt="star" />
                                                        {el.like.length === 0 ? <p>0</p> : <p>5</p>}
                                                        </div>
                                                        <div style={{width:'70%'}}>
                                                            <p className='dashboard-item-price'>{JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).length >= 5 ? JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).substring(4, 0) + '...' : el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                                                            <span className='all-text-on-dushbord'>{el.content.filter(el => el.type === 'price')[0].value + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        )} 
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
            </div>
        </main>
    )
}

export default Transports