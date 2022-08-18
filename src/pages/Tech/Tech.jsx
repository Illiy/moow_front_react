import React from 'react'
import category from '../../storage/category'
import angar from '../../assets/angar2.png'
import star from "../../assets/star.png"
import CategoryScrollUp from '../../components/CategoryScrollUp/CategoryScrollUp'
import map from '../../assets/map.png'
import { Link } from 'react-router-dom'

const Tech = () => {
    const item = ['','','','','','','','','','','','','','','','','','']
    return(
        <main>
            <div className='container' style={{paddingTop:125}}>
            {category.filter(res => res.name === 'Техніка').map((el,key) => 
                    <div key={key} className='col-md-12 p-0'>
                        <div className="category_header">
                            <div>
                                <img src={el.img}/>
                                <p>{el.name}</p>
                            </div>
                            <div>
                                <Link to={el.src} className="a" style={{width:185}}>{el.btn_desc}</Link>
                            </div>
                        </div>
                        <div className='content-body sklady-body'>
                            <div className='col-md-12 p-0'>
                            <div className="row">
                                <div className="col-md-3 pr-0">
                                    <CategoryScrollUp header={"Київська область"} bodyContent={['Транспорт 1', "Транспорт 2"]}/>
                                    <CategoryScrollUp header={"Житомирська область"} bodyContent={['Транспорт 1']}/>
                                    <CategoryScrollUp header={"Вінницька область"} bodyContent={['Транспорт 4', "Транспорт 8"]}/>
                                </div>
                                <div 
                                style={{maxHeight: 540,overflow: 'auto'}}
                                className="col-md-4 pl-0">
                                {item.map((el,key) => 
                                            <div className='col-md-12'>
                                            <div className='dashboard_item'>
                                                <div className='dashboard_subcontainer'>
                                                    <img src={angar}/>
                                                </div>
                                                <div className='dashboard_subcontainer'>
                                                    <h2>Техніка</h2>
                                                    <p className='additional-info_dashboard'>Характеристика</p>
                                                    <div className='menu-info-dashboard'>
                                                        <div style={{width: '30%'}} className='menu-rating-item-dashboard'>
                                                        <img src={star} alt="star" />
                                                        <p>4</p>
                                                        </div>
                                                        <div style={{width:'70%'}}>
                                                            <p className='dashboard-item-price'>30000 грн/год</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)} 
                                </div>
                                <div className="col-md-5 pl-0 map">
                                    <img style={{width: '100%',height:540}} src={map} />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </main>
    )
}

export default Tech