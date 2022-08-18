import React from "react";
import category from '../../storage/category'
import secure from '../../assets/services/security.svg'
import stravohka from '../../assets/services/strahovka.svg'
import urPosluga from '../../assets/services/ur.posluga.svg'
import {Link} from "react-router-dom";


const Services = () => {
    return(
        <main>
            <div style={{paddingTop:125}} className="container">
                {category.filter(res => res.name === 'Додаткові послуги').map((el,key) => 
                    <div key={key} className='col-md-12 p-0'>
                        <div className="category_header">
                            <div>
                                <img src={el.img}/>
                                <p>{el.name}</p>
                            </div>
                            <div>
                                <Link to="/poslugi" className="a" style={{width:185}}>{el.btn_desc}</Link>
                            </div>
                        </div>
                        <div className="body_content">
                            <div className="row my-row-services">
                                <div className="col-md-4">
                                    <div className="service_item">
                                        <Link to="/">
                                            <div>
                                                <img src={secure}/>
                                                <p>Охорона</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service_item">
                                        <Link to="/strahovka">
                                            <div>
                                                <img src={stravohka}/>
                                                <p>Страхування</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service_item">
                                        <Link to="/">
                                            <div>
                                                <img src={urPosluga}/>
                                                <p>Юр. послуги</p>
                                            </div>
                                        </Link>
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

export default Services