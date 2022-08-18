import React, { useEffect, useState } from 'react'
import category from "../../storage/category"
import angar from '../../assets/angar.png'
import eye from "../../assets/eye.svg"
import star from "../../assets/star.png"
import { Link } from 'react-router-dom'
import { productionGet, tehnikaGet, transportGet, warhouseGet } from '../../API/api'
import stock from "../../assets/dashboard/stock.svg"
import transport from '../../assets/dashboard/transport.svg'
import tech from "../../assets/dashboard/tech.svg"
import product from "../../assets/dashboard/product.svg"
import train from "../../assets/dashboard/train.svg"
import additional from "../../assets/dashboard/additional.svg"

const Dashboard = () => {
    const [warhouseList, setWarhouseGet] = useState([])
    const [transportList, setTransportGet] = useState([])
    const [tehnikaList, setTehnikaGet] = useState([])
    const [productionList, setProductionGet] = useState([])

    useEffect(() => {
        warhouseGet(setWarhouseGet)
        transportGet(setTransportGet)
        tehnikaGet(setTehnikaGet)
        productionGet(setProductionGet)
    }, [])

    const DashboardItem = [
        { content: warhouseList, img: stock, name: 'Склади' },
        { content: transportList, img: transport, name: 'Транспорт' },
        { content: tehnikaList, img: tech, name: 'Техніка' },
        { content: productionList, img: product, name: 'Продукція' }
    ]

    const historyWhatching = JSON.parse(localStorage.getItem("history"))

    const makeUniq = () => {
        const uniqSet = new Set(historyWhatching);
        return [...uniqSet];
    }

    const allLists = [...warhouseList, ...transportList, ...tehnikaList, ...productionList]

    const whatchingPosts = allLists === undefined ? '' : allLists.filter(el => el.id === makeUniq().filter(elle => elle === el.id)[0])

    return (
        <main>
            <div style={{ paddingTop: 125 }} className='po-cont container'>
                {whatchingPosts.length === 0 ? '' :
                    <div className='myWhatching'>
                        <h2>Останні переглянуті оголошення</h2>
                        <ul>
                            {whatchingPosts.length >= 10 ? whatchingPosts.slice(10).reverse().map((el, key) =>
                                <Link className='li' to={'/unit/' + el.id} key={key}>
                                    <div className="img" style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                    <div>
                                        <h3>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h3>
                                        <span className='all-text-on-dushbord'>{el.title}</span>
                                        <span>Характеристика</span>
                                        <span className='price'>{el.content.filter(el => el.type === 'price')[0].value + ' ' + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                    </div>
                                </Link>
                            ) : whatchingPosts.reverse().map((el, key) =>
                                <Link className='li' to={'/unit/' + el.id} key={key}>
                                    <div className="img" style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                    <div>
                                        <h3>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h3>
                                        <span className='all-text-on-dushbord'>{el.title}</span>
                                        <span>Характеристика</span>
                                        <span className='price'>{el.content.filter(el => el.type === 'price')[0].value + ' ' + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                    </div>
                                </Link>
                            )}

                        </ul>
                    </div>}
                {warhouseList.length !== 0 && transportList.length !== 0 && tehnikaList.length !== 0 && productionList.length !== 0 ? DashboardItem.map((list, key) =>
                    <div className='col-md-12 p-0' key={key}>
                        <div className="category_header">
                            <div>
                                <img src={list.img} />
                                <p>{list.name}</p>
                            </div>
                            <div>
                                <Link className='a' to='/unit-list/warhouseList' style={{ width: 185 }}>Все</Link>
                            </div>
                        </div>
                        <div className='category_body'>
                            <div className='row wrapper-product-desktop'>
                                <div className='col-md-3'>
                                    <div className='top-item-product'>
                                        <div className='img-desktop-responsive'>
                                            <div className='views-panel'>
                                                <p>0</p>
                                                <img src={eye} alt="views" />
                                            </div>
                                            <img className='img-product' src={angar} />
                                        </div>
                                        <div className='body_product'>
                                            <div>
                                                <h4 className='hover_product'>Склад 1</h4>
                                                <p className='price-product'>300 грн/кв.м.</p>
                                            </div>
                                            <div style={{ paddingTop: 5 }}>
                                                <div className='star-panel'>
                                                    <img src={star} alt="star" />
                                                    <p>4</p>
                                                </div>
                                                <div className='additional-product-info-desktop'>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <div className='row row-block dashboard-row-block'>
                                        {list.content.slice(0, 9).map((el, key) =>
                                            <div className='col-md-4'>
                                                <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                    <div className='dashboard_subcontainer'>
                                                        <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                                    </div>
                                                    <div className='dashboard_subcontainer'>
                                                        <h2>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h2>
                                                        <span className='all-text-on-dushbord'>{el.title}</span>
                                                        <p className='additional-info_dashboard'>1200</p>
                                                        <div className='menu-info-dashboard'>
                                                            <div style={{ width: '20%' }} className='menu-rating-item-dashboard'>
                                                                <img src={star} alt="star" />
                                                                {el.like.length === 0 ? <p>0</p> : <p>5</p>}
                                                            </div>
                                                            <div style={{ width: '70%' }}>
                                                                <p className='dashboard-item-price'>{JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).length >= 5 ? JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).substring(4, 0) + '...' : el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                                                                <span className='all-text-on-dushbord'>{el.content.filter(el => el.type === 'price')[0].value + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className='row row-none'>
                                        {list.content.slice(0, 4).map((el, key) =>
                                            <div className='col-md-4'>
                                                <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                    <div className='dashboard_subcontainer'>
                                                        <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                                    </div>
                                                    <div className='dashboard_subcontainer'>
                                                        <h2>{el.title.length >= 13 ? el.title.substring(13, 0) + '...' : el.title}</h2>
                                                        <span className='all-text-on-dushbord'>{el.title}</span>
                                                        <p className='additional-info_dashboard'>1200</p>
                                                        <div className='menu-info-dashboard'>
                                                            <div style={{ width: '20%' }} className='menu-rating-item-dashboard'>
                                                                <img src={star} alt="star" />
                                                                {el.like.length === 0 ? <p>0</p> : <p>5</p>}
                                                            </div>
                                                            <div style={{ width: '70%' }}>
                                                            <p className='dashboard-item-price'>{JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).length >= 5 ? JSON.stringify(el.content.filter(el => el.type === 'price')[0].value).substring(4, 0) + '...' : el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                                                                <span className='all-text-on-dushbord'>{el.content.filter(el => el.type === 'price')[0].value + el.content.filter(el => el.type === 'price')[0].typeAmount}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className='row row-none row-mobile'>
                                        {list.content.slice(0, 4).map((el, key) =>
                                            <div className='col-md-4'>
                                                <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                    <div className='dashboard_subcontainer'>
                                                        <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                                    </div>
                                                    <div className='dashboard_subcontainer'>
                                                        <h2>{el.title.length >= 40 ? el.title.substring(40, 0) + '...' : el.title}</h2>
                                                        <span className='all-text-on-dushbord'>{el.title}</span>
                                                        <p className='additional-info_dashboard'>1200</p>
                                                        <div className='menu-info-dashboard'>
                                                            <div style={{ width: '20%' }} className='menu-rating-item-dashboard'>
                                                                <img src={star} alt="star" />
                                                                {el.like.length === 0 ? <p>0</p> : <p>5</p>}
                                                            </div>
                                                            <div style={{ width: '70%' }}>
                                                            <p className='dashboard-item-price'>{el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
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
                    </div>) : null}

            </div>
        </main>
    )
}

export default Dashboard