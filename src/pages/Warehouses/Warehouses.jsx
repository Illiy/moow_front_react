import React, {useEffect, useState} from  "react"
import category from '../../storage/category'
import angar from '../../assets/angar.png'
import star from "../../assets/star.png"
import CategoryScrollUp from '../../components/CategoryScrollUp/CategoryScrollUp'
import filter from '../../assets/filter1.png'
import upDown from '../../assets/top-bottom.svg'
import stock from "../../assets/dashboard/stock.svg"
import transport from '../../assets/dashboard/transport.svg'
import tech from "../../assets/dashboard/tech.svg"
import product from "../../assets/dashboard/product.svg"
import { Link } from "react-router-dom"
import Map from '../../components/googleMap/googleMap'
import { useLoadScript } from "@react-google-maps/api"
import { oblasts, productionGet, tehnikaGet, transportGet, warhouseGet } from "../../API/api"


const Warehouses = () => {
    const item = ['','','','','','','','','','','','','','','','','','']

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBEazP8n2OsBYiKQHM3ltFwJmcfWNVyG1o" ,
        id: 'google-map-script'
    });

    const [selectChecked1, setSelectChecked1] = useState(false)
    const [filterChecked, setFilterChecked] = useState(false)

    const filterActive = () => {
        setFilterChecked(filterChecked === false ? true : false)
    }

    const selectOne = () => {
        selectChecked1 === false ? setSelectChecked1(true): setSelectChecked1(false)
    }

    const url = window.location.pathname
    const prodListId = url.split('/')[2]
    
    const [warhouseList, setWarhouseGet] = useState([])
    const [transportList, setTransportGet] = useState([])
    const [tehnikaList, setTehnikaGet] = useState([])
    const [productionList, setProductionGet] = useState([])
    const activeList = prodListId === 'warhouseList' ? warhouseList : 
                       prodListId === 'transportList' ? transportList : 
                       prodListId === 'tehnikaList' ? tehnikaList :
                       prodListId === 'zerno' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === '??????????'):
                       prodListId === 'rozsada' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === '??????????????'):
                       prodListId === 'ovoch' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === '??????????'):
                       prodListId === 'hudoba' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === '????????????'):
                       prodListId === 'fruits' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === '????????????'):
                       prodListId === 'dobruvo' ? productionList.filter(el => el.content.filter(el => el.type === "categoryProduction")[0].value === '??????????????'):
                       null
    const [oblast, setOblast] = useState([])

    useEffect(() => {
        warhouseGet(setWarhouseGet)
        transportGet(setTransportGet)
        tehnikaGet(setTehnikaGet)
        productionGet(setProductionGet)
        oblasts(setOblast)
    }, [])

    const tomat = [
        {name:'warhouseList' , content:{name: '????????????', img: stock,}},
        {name: 'transportList',  content:{name: '??????????????????', img: transport,}},
        {name: 'tehnikaList',  content:{name: '??????????????', img: tech,}},
        {name: 'zerno',  content:{name: '??????????', img: product,}},
        {name: 'ovoch',  content:{name: '??????????', img: product,}},
        {name: 'fruits',  content:{name: '????????????', img: product,}},
        {name: 'hudoba',  content:{name: '????????????', img: product,}},
        {name: 'dobruvo',  content:{name: '??????????????', img: product,}},
        {name: 'rozsada',  content:{name: '??????????????', img: product,}}
    ]

 
    return(
        <main>
            <div className="container po-cont" style={{paddingTop:125}}>
                {tomat.filter(elle => elle.name === prodListId).map((el,key) => 
                    <div key={key} className='col-md-12 p-0'>
                        <div className="category_header">
                            <div>
                                <img src={el.content.img}/>
                                <p>{el.content.name}</p>
                            </div>
                            <div>
                                <Link className="a" to={'/unit-list/' + prodListId} style={{width:185}}>??????</Link>
                            </div>
                        </div>
                        <div className="category_middle">
                            <div className="left">
                                <span>#??????1</span>
                                <span>#??????2</span>
                                <span>#??????3</span>
                            </div>
                            <div className="right">
                                <div className="sort">
                                    <span>??????????????????</span>
                                    <img src={upDown} alt="" />
                                </div>
                                <div className="filter">
                                    <span onClick={() => filterActive()}>????????????</span>
                                    <img src={filter} alt="" onClick={() => filterActive()} />
                                    <div style={filterChecked === false ? {height: '0px', width: '0px', padding: '0px'} : {height: '540px', width: '320px', padding: '20px 20px 35px 20px'}} className="filter-block">
                                        <div className="head">
                                            <div>
                                                <img src={filter} alt="" />
                                                <span>????????????</span>
                                            </div>
                                            <span className="close" onClick={() => filterActive()}>x</span>
                                        </div>
                                        <div className="main">
                                            <div className="main-block-1">
                                                <span>?????????????? ??????????????????????</span>
                                                <div className="select">
                                                    <h3 onClick={() => selectOne()}>???????????????? ??????????????</h3>
                                                    <ul style={selectChecked1 === false ? {height: '0px'} : {height: '100%'}}>
                                                        <li onClick={() => selectOne()}>???????????????? ??????????????</li>
                                                        <li onClick={() => selectOne()}>?????????????????? ??????????????</li>
                                                        <li onClick={() => selectOne()}>?????????????? ??????????????</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="main-block-2">
                                                <input type="checkbox" name="" id="camera" />
                                                <label htmlFor="camera">????????????</label>
                                            </div>
                                            <div className="main-block-3">
                                                <span>??????????</span>
                                                <div>
                                                    <input type="number" name="" id="" />
                                                    <span> - </span>
                                                    <input type="number" name="" id="" />
                                                    <span className="kmm">????.??.</span>
                                                </div>
                                            </div>
                                            <div className="main-block-4">
                                                <span>???????????????? ????????????</span>
                                                <div>
                                                    <input type="number" name="" id="" />
                                                    <span> - </span>
                                                    <input type="number" name="" id="" />
                                                    <span>??????</span>
                                                </div>
                                            </div>
                                            <div className="main-block-5">
                                                <input type="checkbox" name="" id="chlahi" />
                                                <label htmlFor="chlahi">??????'???????? ??????????</label>
                                            </div>
                                            <div className="main-block-6">
                                                <input type="checkbox" name="" id="rampi" />
                                                <label htmlFor="rampi">??????????</label>
                                            </div>
                                            <div className="main-block-7">
                                                <span>???????? ???????????????????? ????????????????????:</span>
                                                <input type="date" name="" id="" />
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <button className="button1">??????????????????????</button>
                                            <button className="button2">??????????????</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content-body sklady-body'>
                            <div className='col-md-12 p-0'>
                            <div className="row">
                                <div className="col-md-3 pr-0">
                                    {oblast.map((el, key) => 
                                        <CategoryScrollUp header={el.name} bodyContent={['?????????????????? 1', "?????????????????? 2"]}/>
                                    )}
                                </div>
                                <div 
                                style={{maxHeight: 540,overflowY: 'auto'}}
                                className="col-md-4 pl-0">
                                    {activeList.map((el,key) =>
                                        <div key={key} className='col-md-12'>
                                            <Link to={'/unit/' + el.id} className='dashboard_item'>
                                                <div className='dashboard_subcontainer'>
                                                    <div className='img' style={{ background: `url(http://82.144.203.3:5000/${el.img[0]})` }}></div>
                                                </div>
                                                <div className='dashboard_subcontainer'>
                                                    <h2>{el.title.length >= 18 ? el.title.substring(18, 0) + '...' : el.title}</h2>
                                                    <span className='all-text-on-dushbord'>{el.title}</span>
                                                    <p className='additional-info_dashboard'>1200/????.??.</p>
                                                    <div className='menu-info-dashboard'>
                                                        <div style={{width: '30%'}} className='menu-rating-item-dashboard'>
                                                        <img src={star} alt="star" />
                                                        <p>4</p>
                                                        </div>
                                                        <div style={{width:'70%'}}>
                                                            <p className='dashboard-item-price'>{el.content.filter(el => el.type === 'price')[0].value} {el.content.filter(el => el.type === 'price')[0].typeAmount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>)} 
                                </div>
                                <div className="col-md-5 pl-0 map">
                                    {isLoaded ? <Map /> : null}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </main>
    )
}

export default Warehouses