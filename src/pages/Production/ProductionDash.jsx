import React from "react";
import category from '../../storage/category'
import angar from '../../assets/angar1.png'
import star from "../../assets/star.png"
import CategoryScrollUp from '../../components/CategoryScrollUp/CategoryScrollUp'
import { Link } from "react-router-dom";


const ProductionDash = (props) => {
    const item = ['','','','','','','','','','','','','','','','','','']
    const choosenLinks = props.location.choosenLink
    console.log(choosenLinks)
    return(
        <main>
            <div className="container" style={{paddingTop:125}}>
            {category.filter(res => res.name === 'Продукція').map((el,key) => 
                    <div key={key} className='col-md-12 p-0'>
                        <div className="category_header">
                            <div>
                                <img src={el.img}/>
                                <p>{el.name}</p>
                            </div>
                            <div>
                                <Link className="a" to="/produkcia/list" style={{width:185}}>{el.btn_desc}</Link>
                            </div>
                        </div>
                        <div className='content-body'>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='row'>
                                            <p className='mr-2'>#тег1</p>
                                            <p className='mr-2'>#тег2</p>
                                            <p className='mr-2'>#тег2</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 p-0'>
                                <div className='row'>
                                <div className='col-md-3'>
                                    <CategoryScrollUp header={"Київська область"} bodyContent={['Транспорт 1', "Транспорт 2"]}/>
                                    <CategoryScrollUp header={"Житомирська область"} bodyContent={['Транспорт 1']}/>
                                    <CategoryScrollUp header={"Вінницька область"} bodyContent={['Транспорт 4', "Транспорт 8"]}/>
                                </div>
                                <div className='col-md-9'>
                                    <div className='row'>
                                        {item.map((el,key) => 
                                            <div className='col-md-4'>
                                            <Link to="/produkcia/list/productiononce" className='dashboard_item'>
                                                <div className='dashboard_subcontainer'>
                                                    <img src={angar}/>
                                                </div>
                                                <div className='dashboard_subcontainer'>
                                                    <h2>Зерно</h2>
                                                    <p className='additional-info_dashboard'>Характеристика</p>
                                                    <div className='menu-info-dashboard'>
                                                        <div style={{width: '30%'}} className='menu-rating-item-dashboard'>
                                                        <img src={star} alt="star" />
                                                        <p>4</p>
                                                        </div>
                                                        <div style={{width:'70%'}}>
                                                            <p className='dashboard-item-price'>1300 грн/т.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>)} 
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

export default ProductionDash